import os
from dotenv import load_dotenv
load_dotenv()

import cv2
import numpy as np
import mediapipe as mp
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import io
import traceback
import base64
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
import urllib.request
from PIL import Image
from pillow_heif import register_heif_opener
register_heif_opener()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "ok"}


_pose_landmarker = None
_image_segmenter = None

def get_pose_landmarker():
    global _pose_landmarker
    if _pose_landmarker is None:
        MODEL_PATH = 'pose_landmarker_lite.task'
        if not os.path.exists(MODEL_PATH) or os.path.getsize(MODEL_PATH) < 10000:
            print("Downloading pose_landmarker_lite.task...")
            urllib.request.urlretrieve('https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task', MODEL_PATH)
        base_options = python.BaseOptions(model_asset_path=MODEL_PATH)
        options = vision.PoseLandmarkerOptions(base_options=base_options, num_poses=1)
        _pose_landmarker = vision.PoseLandmarker.create_from_options(options)
    return _pose_landmarker

def get_image_segmenter():
    global _image_segmenter
    if _image_segmenter is None:
        SEG_MODEL_PATH = 'selfie_segmenter.tflite'
        if not os.path.exists(SEG_MODEL_PATH) or os.path.getsize(SEG_MODEL_PATH) < 10000:
            print("Downloading selfie segmenter...")
            urllib.request.urlretrieve('https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite', SEG_MODEL_PATH)
        base_options_seg = python.BaseOptions(model_asset_path=SEG_MODEL_PATH)
        options_seg = vision.ImageSegmenterOptions(base_options=base_options_seg, output_category_mask=False, output_confidence_masks=True)
        _image_segmenter = vision.ImageSegmenter.create_from_options(options_seg)
    return _image_segmenter

PATCHES_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), 'patches'))
if not os.path.exists(PATCHES_DIR):
    PATCHES_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../app/public/patches'))

def overlay_transparent(background, overlay, x, y):
    bg_h, bg_w, bg_c = background.shape
    ol_h, ol_w, ol_c = overlay.shape

    if x >= bg_w or y >= bg_h:
        return background

    h, w = min(ol_h, bg_h - y), min(ol_w, bg_w - x)
    
    if h <= 0 or w <= 0:
        return background

    y1, y2 = max(0, y), min(bg_h, y + h)
    x1, x2 = max(0, x), min(bg_w, x + w)
    
    oy1, oy2 = max(0, -y), max(0, -y) + (y2 - y1)
    ox1, ox2 = max(0, -x), max(0, -x) + (x2 - x1)

    alpha = overlay[oy1:oy2, ox1:ox2, 3] / 255.0
    overlay_rgb = overlay[oy1:oy2, ox1:ox2, :3]

    for c in range(3):
        background[y1:y2, x1:x2, c] = (alpha * overlay_rgb[:, :, c] +
                                       (1 - alpha) * background[y1:y2, x1:x2, c])
                                       
    bg_alpha = background[y1:y2, x1:x2, 3] / 255.0
    background[y1:y2, x1:x2, 3] = np.clip((alpha + bg_alpha) * 255.0, 0, 255)
    
    return background

def feather_top_boundary(patch, feather_pixels=40):
    if patch is None or len(patch.shape) != 3 or patch.shape[2] != 4:
        return patch
    
    h, w, c = patch.shape
    alpha = patch[:, :, 3].copy()
    
    for x in range(w):
        ys = np.where(alpha[:, x] > 10)[0]
        if len(ys) > 0:
            first_y = ys[0]
            for i in range(min(feather_pixels, len(ys))):
                y_idx = ys[i]
                blend = float(i) / float(feather_pixels)
                alpha[y_idx, x] = int(alpha[y_idx, x] * blend)
                
    feathered_patch = patch.copy()
    feathered_patch[:, :, 3] = alpha
    return feathered_patch

def color_shift_patch(patch, target_bgr):
    if patch is None or len(patch.shape) != 3 or patch.shape[2] != 4:
        return patch
    alpha = patch[:, :, 3]
    mask = alpha > 50
    if not np.any(mask):
        return patch
    bgr = patch[:, :, :3]
    patch_bgr_pixels = bgr[mask]
    
    # Calculate brightness of each pixel (simple average of B, G, R)
    brightness = np.mean(patch_bgr_pixels, axis=1)
    
    # Filter to only keep the top 50% brightest pixels (avoids shadows, creases, fingernails)
    threshold = np.median(brightness)
    bright_pixels = patch_bgr_pixels[brightness >= threshold]
    
    # Calculate the median BGR of these bright skin pixels
    patch_median_bgr = np.median(bright_pixels, axis=0)
    
    target_lab = cv2.cvtColor(np.uint8([[target_bgr]]), cv2.COLOR_BGR2LAB)[0][0]
    source_lab = cv2.cvtColor(np.uint8([[patch_median_bgr]]), cv2.COLOR_BGR2LAB)[0][0]
    l_diff = int(target_lab[0]) - int(source_lab[0])
    a_diff = int(target_lab[1]) - int(source_lab[1])
    b_diff = int(target_lab[2]) - int(source_lab[2])
    lab = cv2.cvtColor(bgr, cv2.COLOR_BGR2LAB).astype(np.int16)
    lab[:, :, 0] += l_diff
    lab[:, :, 1] += a_diff
    lab[:, :, 2] += b_diff
    lab = np.clip(lab, 0, 255).astype(np.uint8)
    new_bgr = cv2.cvtColor(lab, cv2.COLOR_LAB2BGR)
    shifted_patch = patch.copy()
    shifted_patch[:, :, :3] = np.where(alpha[:, :, None] > 0, new_bgr, bgr)
    return shifted_patch

def run_replicate_prediction(client, version_id, inputs):
    import time
    prediction = client.predictions.create(
        version=version_id,
        input=inputs
    )
    
    start_time = time.time()
    while prediction.status not in ["succeeded", "failed", "canceled"]:
        if time.time() - start_time > 300: # 5 minutes max
            raise TimeoutError("Replicate prediction timed out")
        time.sleep(2)
        try:
            prediction.reload()
        except Exception as poll_err:
            print(f"Warning: Polling error occurred, retrying... Details: {poll_err}")
            
    if prediction.status == "succeeded":
        return prediction.output
    else:
        raise RuntimeError(f"Replicate prediction failed with status '{prediction.status}'. Details: {prediction.error}")

# Using `def` instead of `async def` makes FastAPI run this in an external threadpool!
# This prevents blocking the main server loop.
@app.post("/process")
def process_image(
    selfie_image: UploadFile = File(...),
    body_image: UploadFile = File(...),
    user_height: str = Form(""),
    size: str = Form("M"),
    body_type: str = Form("Medium")
):
    try:
        pose = get_pose_landmarker()
        segmenter = get_image_segmenter()
        
        user_height_str = user_height
        user_height_cm = 0
        try:
            if user_height_str:
                if '.' in user_height_str:
                    parts = user_height_str.split('.')
                    feet = int(parts[0])
                    inches = int(parts[1]) if len(parts) > 1 else 0
                    total_inches = (feet * 12) + inches
                    user_height_cm = total_inches * 2.54
                else:
                    val = float(user_height_str)
                    user_height_cm = val if val > 100 else (val * 12) * 2.54
        except ValueError:
            pass
        
        body_bytes = body_image.file.read()
        body_nparr = np.frombuffer(body_bytes, np.uint8)
        img = cv2.imdecode(body_nparr, cv2.IMREAD_COLOR)
        
        selfie_bytes = selfie_image.file.read()
        selfie_nparr = np.frombuffer(selfie_bytes, np.uint8)
        selfie_img = cv2.imdecode(selfie_nparr, cv2.IMREAD_COLOR)
        
        height, width, _ = img.shape
        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
        results = pose.detect(mp_image)
        
        if not results.pose_landmarks or len(results.pose_landmarks) == 0:
            return JSONResponse(status_code=400, content={'error': 'No pose detected'})
            
        lms = results.pose_landmarks[0]
        
        def pixel(lm):
            return int(lm.x * width), int(lm.y * height)
            
        nose = pixel(lms[0])
        l_shoulder = pixel(lms[11])
        r_shoulder = pixel(lms[12])
        l_hip = pixel(lms[23])
        r_hip = pixel(lms[24])
        
        shoulder_mid = ((l_shoulder[0] + r_shoulder[0]) // 2, (l_shoulder[1] + r_shoulder[1]) // 2)
        hip_mid = ((l_hip[0] + r_hip[0]) // 2, (l_hip[1] + r_hip[1]) // 2)
        
        user_shoulder_w = np.sqrt((r_shoulder[0] - l_shoulder[0])**2 + (r_shoulder[1] - l_shoulder[1])**2)
        user_hip_w = np.sqrt((r_hip[0] - l_hip[0])**2 + (r_hip[1] - l_hip[1])**2)
        user_torso_h = hip_mid[1] - shoulder_mid[1]
        
        # Check visibility to avoid hallucinations on headshots
        if lms[23].visibility < 0.5 or lms[24].visibility < 0.5 or user_torso_h < user_shoulder_w * 0.5:
            user_hip_w = user_shoulder_w * 0.70
            user_torso_h = user_shoulder_w * 1.5
            
        body_ratio = user_shoulder_w / max(1, user_torso_h)
        
        # Use segmenter to get physical body silhouette width
        seg_results = segmenter.segment(mp_image)
        mask = seg_results.confidence_masks[0].numpy_view()
        
        l_elbow = pixel(lms[13])
        r_elbow = pixel(lms[14])
        l_wrist = pixel(lms[15])
        r_wrist = pixel(lms[16])
        
        def get_x_on_line(y, x1, y1, x2, y2):
            if y2 == y1: return (x1 + x2) / 2
            return x1 + (x2 - x1) * (y - y1) / (y2 - y1)
            
        def get_arm_x(y, shoulder, elbow, wrist):
            if min(shoulder[1], elbow[1]) <= y <= max(shoulder[1], elbow[1]):
                return get_x_on_line(y, shoulder[0], shoulder[1], elbow[0], elbow[1])
            if min(elbow[1], wrist[1]) <= y <= max(elbow[1], wrist[1]):
                return get_x_on_line(y, elbow[0], elbow[1], wrist[0], wrist[1])
            return -1
        
        def get_mask_width_at(y, cx):
            if y < 0 or y >= height: return 0
            row = mask[y, :]
            
            min_x = 0
            lax = get_arm_x(y, r_shoulder, r_elbow, r_wrist)
            if lax != -1 and lax < cx:
                min_x = int(lax + user_shoulder_w * 0.08)
                
            max_x = width - 1
            rax = get_arm_x(y, l_shoulder, l_elbow, l_wrist)
            if rax != -1 and rax > cx:
                max_x = int(rax - user_shoulder_w * 0.08)

            l_edge = cx
            while l_edge > min_x and row[l_edge] > 0.5:
                l_edge -= 1
            r_edge = cx
            while r_edge < max_x and row[r_edge] > 0.5:
                r_edge += 1
            return r_edge - l_edge
            
        def get_full_mask_width_at(y, cx):
            if y < 0 or y >= height: return 0
            row = mask[y, :]
            l_edge = cx
            while l_edge > 0 and row[l_edge] > 0.5:
                l_edge -= 1
            r_edge = cx
            while r_edge < width - 1 and row[r_edge] > 0.5:
                r_edge += 1
            return r_edge - l_edge
            
        tummy_y = int(shoulder_mid[1] + (hip_mid[1] - shoulder_mid[1]) * 0.75)
        cx = max(0, min(width - 1, shoulder_mid[0]))
        
        real_tummy_w = get_mask_width_at(tummy_y, cx)
        real_shoulder_w = get_full_mask_width_at(shoulder_mid[1], cx)
        
        if real_tummy_w > 0 and real_shoulder_w > 0:
            tummy_ratio = real_tummy_w / max(1, real_shoulder_w)
        else:
            tummy_ratio = user_hip_w / max(1, user_shoulder_w)
        
        # Extract skin color from selfie image to match the face swap
        selfie_mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=cv2.cvtColor(selfie_img, cv2.COLOR_BGR2RGB))
        selfie_results = pose.detect(selfie_mp_image)
        
        user_bgr = np.array([131.0, 160.0, 204.0])
        valid_pixels = []
        
        if selfie_results.pose_landmarks and len(selfie_results.pose_landmarks) > 0:
            s_lms = selfie_results.pose_landmarks[0]
            s_h, s_w, _ = selfie_img.shape
            
            s_l_eye = (int(s_lms[2].x * s_w), int(s_lms[2].y * s_h))
            s_r_eye = (int(s_lms[5].x * s_w), int(s_lms[5].y * s_h))
            s_l_mouth = (int(s_lms[9].x * s_w), int(s_lms[9].y * s_h))
            s_r_mouth = (int(s_lms[10].x * s_w), int(s_lms[10].y * s_h))
            
            s_l_cheek = ((s_l_eye[0] + s_l_mouth[0]) // 2, (s_l_eye[1] + s_l_mouth[1]) // 2)
            s_r_cheek = ((s_r_eye[0] + s_r_mouth[0]) // 2, (s_r_eye[1] + s_r_mouth[1]) // 2)
            s_eye_dist = abs(s_l_eye[0] - s_r_eye[0])
            s_cheek_box = max(3, int(s_eye_dist * 0.4))
            
            s_l_cheek_patch = selfie_img[max(0, s_l_cheek[1] - s_cheek_box):min(s_h, s_l_cheek[1] + s_cheek_box),
                                         max(0, s_l_cheek[0] - s_cheek_box):min(s_w, s_l_cheek[0] + s_cheek_box)]
            s_r_cheek_patch = selfie_img[max(0, s_r_cheek[1] - s_cheek_box):min(s_h, s_r_cheek[1] + s_cheek_box),
                                         max(0, s_r_cheek[0] - s_cheek_box):min(s_w, s_r_cheek[0] + s_cheek_box)]
            
            if s_l_cheek_patch.size > 0:
                valid_pixels.append(s_l_cheek_patch.reshape(-1, 3))
            if s_r_cheek_patch.size > 0:
                valid_pixels.append(s_r_cheek_patch.reshape(-1, 3))
                
        if not valid_pixels:
            # Fallback to center of selfie image (assuming face is mostly centered)
            s_h, s_w, _ = selfie_img.shape
            cy, cx = s_h // 2, s_w // 2
            box = min(s_h, s_w) // 6
            center_patch = selfie_img[cy-box:cy+box, cx-box:cx+box]
            if center_patch.size > 0:
                valid_pixels.append(center_patch.reshape(-1, 3))

        if valid_pixels:
            combined = np.vstack(valid_pixels)
            user_bgr = np.median(combined, axis=0)
            
        print(f"DEBUG: shoulder_w={user_shoulder_w:.1f}, hip_w={user_hip_w:.1f}, torso_h={user_torso_h:.1f}")
        print(f"DEBUG: Calculated tummy_ratio={tummy_ratio:.3f}, body_ratio={body_ratio:.3f}")
        
        # Standard templates mapping to match frontend preset body configuration perfectly
        size_upper = size.upper()
        if size_upper in ['S', 'XS']:
            leg_name = 'G/G1.webp'
            torso_name = 'F/F1.webp'
            tummy_name = 'AA/AA1.webp'
            chest_name = 'B/B1 flat/B1-F1-S.webp'
            left_arm = 'D/D1-S.webp'
            right_arm = 'E/E1-S.webp'
            neck_name = 'C/C1.webp'
            shoulder_name = 'Shoulder/Shl1.webp'
            
            sizeCode = 'S'
            tummyIndex = 1
            chestFolder = 'B1 flat'
            chestPrefix = 'B1-F1'
            pelvicIndex = 1
            limbIndex = 1
            legIndex = 1
            neckIndex = 1
        elif size_upper == 'L':
            leg_name = 'G/G3.webp'
            torso_name = 'F/F3.webp'
            tummy_name = 'AA/AA3.webp'
            chest_name = 'B/B3 trapzoid/B3-F3-A.webp'
            left_arm = 'D/D3-A.webp'
            right_arm = 'E/E3-A.webp'
            neck_name = 'C/C3.webp'
            shoulder_name = 'Shoulder/Shl3.webp'
            
            sizeCode = 'A'
            tummyIndex = 3
            chestFolder = 'B3 trapzoid'
            chestPrefix = 'B3-F3'
            pelvicIndex = 2
            limbIndex = 3
            legIndex = 3
            neckIndex = 3
        elif size_upper == 'XL':
            leg_name = 'G/G3.webp'
            torso_name = 'F/F4.webp'
            tummy_name = 'AA/AA4.webp'
            chest_name = 'B/B4 triangle/B4-F4-A.webp'
            left_arm = 'D/D3-A.webp'
            right_arm = 'E/E3-A.webp'
            neck_name = 'C/C3.webp'
            shoulder_name = 'Shoulder/Shl4.webp'
            
            sizeCode = 'A'
            tummyIndex = 4
            chestFolder = 'B4 triangle'
            chestPrefix = 'B4-F4'
            pelvicIndex = 3
            limbIndex = 3
            legIndex = 3
            neckIndex = 3
        elif size_upper == 'XXL':
            leg_name = 'G/G3.webp'
            torso_name = 'F/F5.webp'
            tummy_name = 'AA/AA5.webp'
            chest_name = 'B/B5 oval/B5-F5-H.webp'
            left_arm = 'D/D4-H.webp'
            right_arm = 'E/E4-H.webp'
            neck_name = 'C/C3.webp'
            shoulder_name = 'Shoulder/Shl3.webp'
            
            sizeCode = 'H'
            tummyIndex = 5
            chestFolder = 'B5 oval'
            chestPrefix = 'B5-F5'
            pelvicIndex = 3
            limbIndex = 4
            legIndex = 3
            neckIndex = 3
        else: # Default is M
            leg_name = 'G/G2.webp'
            torso_name = 'F/F2.webp'
            tummy_name = 'AA/AA2.webp'
            chest_name = 'B/B2 rectangle/B2-F2-M.webp'
            left_arm = 'D/D2-M.webp'
            right_arm = 'E/E2-M.webp'
            neck_name = 'C/C2.webp'
            shoulder_name = 'Shoulder/Shl2.webp'
            
            sizeCode = 'M'
            tummyIndex = 2
            chestFolder = 'B2 rectangle'
            chestPrefix = 'B2-F2'
            pelvicIndex = 1
            limbIndex = 2
            legIndex = 2
            neckIndex = 2

        paths = [
            torso_name,
            leg_name,
            chest_name,
            tummy_name,
            shoulder_name,
            neck_name,
            'A/FACE.webp',
            left_arm,
            right_arm,
            'H/H1.webp' # Draw hands on top of arms as requested
        ]
        
        metadata = {
            "sizeCode": sizeCode,
            "tummyIndex": tummyIndex,
            "chestFolder": chestFolder,
            "chestPrefix": chestPrefix,
            "pelvicIndex": pelvicIndex,
            "limbIndex": limbIndex,
            "legIndex": legIndex,
            "neckIndex": neckIndex
        }
        
        out_canvas = np.zeros((height, width, 4), dtype=np.uint8)
        temp_canvas = np.zeros((3000, 1100, 4), dtype=np.uint8) 
        
        loaded_count = 0
        
        def read_image_alpha(path):
            img = cv2.imread(path, cv2.IMREAD_UNCHANGED)
            if img is not None: return img
            try:
                pil_img = Image.open(path).convert('RGBA')
                open_cv_image = np.array(pil_img) 
                return open_cv_image[:, :, [2, 1, 0, 3]]
            except Exception as e:
                return None
        
        for idx, relative_path in enumerate(paths):
            full_path = os.path.join(PATCHES_DIR, relative_path)
            patch = read_image_alpha(full_path)
            if patch is not None and len(patch.shape) == 3 and patch.shape[2] == 4:
                # Color shift each skin patch individually to match the target user skin color
                patch = color_shift_patch(patch, user_bgr)
                
                # Apply soft feathering to the hand patch wrist boundary to blend seamlessly with the arm underneath
                if relative_path == 'H/H1.webp':
                    patch = feather_top_boundary(patch, feather_pixels=45)
                
                loaded_count += 1
                ph, pw, _ = patch.shape
                offset_x = (1100 - pw) // 2
                offset_y = 0 
                temp_canvas = overlay_transparent(temp_canvas, patch, offset_x, offset_y)
                
                # Write debug steps
                cv2.imwrite(f"debug_step_{idx+1}_{os.path.basename(relative_path).replace('.webp', '')}.png", temp_canvas)
            else:
                print(f"Failed to load or not BGRA: {full_path}")


        # Always output the preset 1100x3000 body frame directly
        visible_avatar = temp_canvas[0:3000, 0:1100]
        cv2.imwrite("debug_07_before_faceswap.png", visible_avatar)
        
        metadata.update({
            "crop_x": 0,
            "crop_y": 0,
            "crop_w": 1100,
            "crop_h": 3000,
            "scale_factor": 1.0,
            "start_y": 0
        })
        print("Initiating Replicate API Face Swap...")
        try:
            import replicate
            import tempfile
            import requests
            
            if not os.environ.get('REPLICATE_API_TOKEN'):
                raise KeyError("REPLICATE_API_TOKEN environment variable not set")
            
            with tempfile.TemporaryDirectory() as temp_dir:
                user_img_path = os.path.join(temp_dir, 'user_img.png')
                avatar_path = os.path.join(temp_dir, 'avatar.png')
                
                # Convert 4-channel BGRA template to 3-channel BGR by blending onto solid background
                # This ensures the face swap model receives a standard 3-channel image without alpha crashes
                alpha = visible_avatar[:, :, 3:4] / 255.0
                bgr = visible_avatar[:, :, :3]
                bg_color = np.array([217, 216, 214]) # BGR light gray background
                bgr_avatar = (bgr * alpha + bg_color * (1 - alpha)).astype(np.uint8)
                
                cv2.imwrite(user_img_path, selfie_img) 
                cv2.imwrite(avatar_path, bgr_avatar) 
                
                print("Uploading to Replicate (codeplugtech/face-swap)...")
                
                f_user = open(user_img_path, "rb")
                f_avatar = open(avatar_path, "rb")
                try:
                    client = replicate.Client(api_token=os.environ['REPLICATE_API_TOKEN'], timeout=300.0)
                    output_url = run_replicate_prediction(
                        client,
                        "278a81e7ebb22db98bcba54de985d22cc1abeead2754eb1f2af717247be69b34",
                        {
                            "swap_image": f_user,
                            "input_image": f_avatar
                        }
                    )
                finally:
                    f_user.close()
                    f_avatar.close()
                
                if output_url:
                    print(f"Face Swap successful! Output type: {type(output_url)}")
                    if isinstance(output_url, list) and len(output_url) > 0:
                        output_url = output_url[0]
                    
                    content_bytes = None
                    if hasattr(output_url, "read"):
                        try:
                            content_bytes = output_url.read()
                            print("Read bytes directly from Replicate output stream.")
                        except Exception as read_err:
                            print("Failed to read from output stream:", read_err)
                            
                    if content_bytes is None and hasattr(output_url, "url"):
                        try:
                            url_str = str(output_url.url)
                            print(f"Downloading from output_url.url: {url_str}")
                            response = requests.get(url_str)
                            if response.status_code == 200:
                                content_bytes = response.content
                        except Exception as url_err:
                            print("Failed to download from output_url.url:", url_err)
                            
                    if content_bytes is None:
                        try:
                            url_str = str(output_url)
                            if url_str.startswith("http"):
                                print(f"Downloading from URL string: {url_str}")
                                response = requests.get(url_str)
                                if response.status_code == 200:
                                    content_bytes = response.content
                            else:
                                print(f"Output string is not a valid URL: {url_str}")
                        except Exception as dl_err:
                            print("Failed to download from string URL:", dl_err)
                            
                    if content_bytes is not None:
                        print("Successfully retrieved face-swapped avatar bytes.")
                        nparr = np.frombuffer(content_bytes, np.uint8)
                        swapped_img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
                        
                        if swapped_img is not None:
                            cv2.imwrite("debug_08_after_faceswap.png", swapped_img)
                            target_h, target_w = visible_avatar.shape[:2]
                            if swapped_img.shape[:2] != (target_h, target_w):
                                swapped_img = cv2.resize(swapped_img, (target_w, target_h))
                            
                            b, g, r = cv2.split(swapped_img)
                            alpha = visible_avatar[:, :, 3]
                            
                            final_bgra = cv2.merge((b, g, r, alpha))
                            
                            is_success, final_buffer = cv2.imencode(".png", final_bgra)
                            if is_success:
                                b64 = base64.b64encode(final_buffer).decode('utf-8')
                                return {
                                    'image': f"data:image/png;base64,{b64}",
                                    'metadata': metadata
                                }
                                
                        b64 = base64.b64encode(response.content).decode('utf-8')
                        return {
                            'image': f"data:image/png;base64,{b64}",
                            'metadata': metadata
                        }
                    else:
                        print(f"Failed to download swapped image. Status code: {response.status_code}")
        except Exception as e:
            print("Face Swap failed! Error:", e)
            import traceback
            traceback.print_exc()
            raise HTTPException(status_code=500, detail=f"Face Swap failed: {str(e)}")
        
        is_success, buffer = cv2.imencode(".png", visible_avatar)
        if is_success:
            b64 = base64.b64encode(buffer).decode('utf-8')
            return {
                'image': f"data:image/png;base64,{b64}",
                'metadata': metadata
            }

        print("Coords was none or missing chest bounds")
        return JSONResponse(status_code=500, content={'error': f'Failed to build. Loaded: {loaded_count}'})

    except Exception as e:
        print("EXCEPTION CAUGHT:", e)
        traceback.print_exc()
        return JSONResponse(status_code=500, content={'error': str(e), 'trace': traceback.format_exc()})

@app.post("/tryon")
def virtual_tryon(model_image: UploadFile = File(...), garment_url: str = Form(...), category: str = Form("upper_body")):
    import replicate
    import tempfile
    
    if not os.environ.get('REPLICATE_API_TOKEN'):
        raise KeyError("REPLICATE_API_TOKEN environment variable not set")

    with tempfile.TemporaryDirectory() as temp_dir:
        human_img_path = os.path.join(temp_dir, 'human_img.png')
        with open(human_img_path, "wb") as f:
            f.write(model_image.file.read())

        print(f"Sending to IDM-VTON... Clothing URL: {garment_url}")
        
        try:
            with open(human_img_path, "rb") as human_file:
                client = replicate.Client(api_token=os.environ['REPLICATE_API_TOKEN'], timeout=300.0)
                output = run_replicate_prediction(
                    client,
                    "0513734a452173b8173e907e3a59d19a36266e55b48528559432bd21c7d7e985",
                    {
                        "human_img": human_file,
                        "garm_img": garment_url,
                        "category": category,
                        "num_inference_steps": 30
                    }
                )

            if isinstance(output, list) and len(output) > 0:
                output = output[0]

            url_val = None
            if hasattr(output, "url"):
                url_val = str(output.url)
            else:
                url_val = str(output)

            # Save the tryon output image locally as debug_10_after_tryon.png
            try:
                import requests
                vton_res = requests.get(url_val)
                if vton_res.status_code == 200:
                    with open("debug_10_after_tryon.png", "wb") as f:
                        f.write(vton_res.content)
                    print("Successfully saved debug_10_after_tryon.png")
            except Exception as vton_err:
                print("Failed to save debug_10_after_tryon.png:", vton_err)

            return {"image_url": url_val}

        except Exception as e:
            print("VTON Error:", e)
            import traceback
            traceback.print_exc()
            return JSONResponse(status_code=500, content={'error': str(e)})

if __name__ == '__main__':
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=5001, reload=True)
