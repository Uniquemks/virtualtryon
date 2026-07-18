# MediaPipe Render Startup Fix Report

## 1. Root Cause

On headless server platforms (such as Render Linux environments), standard graphic libraries like OpenGL/GLES (`libGLESv2.so.2`) are not pre-installed. 

Previously, `backend/main.py` initialized both `vision.PoseLandmarker` and `vision.ImageSegmenter` at the global module import level. When the Uvicorn application started, it imported `main.py`, which immediately triggered MediaPipe to load native graphics rendering components. Because `libGLESv2.so.2` was missing, the OS threw an `OSError` and crashed the server process immediately on startup.

---

## 2. Files Modified

*   **[backend/main.py](file:///c:/Users/HP/virtual-trail-room-demo/backend/main.py)**:
    *   Removed global execution blocks for `vision.PoseLandmarker.create_from_options` and `vision.ImageSegmenter.create_from_options`.
    *   Added lazy loaders `get_pose_landmarker()` and `get_image_segmenter()` that cache instances upon first call.
    *   Updated the `/process` route to call these lazy getters inside the request thread handler.

---

## 3. Code Changes

### Before (Global Scope Execution)
```python
base_options = python.BaseOptions(model_asset_path=MODEL_PATH)
options = vision.PoseLandmarkerOptions(base_options=base_options, num_poses=1)
pose = vision.PoseLandmarker.create_from_options(options)
```

### After (Lazy Initialization)
```python
_pose_landmarker = None

def get_pose_landmarker():
    global _pose_landmarker
    if _pose_landmarker is None:
        # Load and download dependencies only when this getter is called
        base_options = python.BaseOptions(model_asset_path=MODEL_PATH)
        options = vision.PoseLandmarkerOptions(base_options=base_options, num_poses=1)
        _pose_landmarker = vision.PoseLandmarker.create_from_options(options)
    return _pose_landmarker
```

---

## 4. Why Lazy Initialization Fixes Render Startup

FastAPI servers are checked for healthy startup status (health checks) during deployment checks on Render. By deferring the initialization of MediaPipe models to request-time (lazy loading), the Uvicorn server can:
1. Start and bind to the designated port successfully without importing graphic dependencies.
2. Complete health check validations.
3. Keep the server active and listening, only initializing MediaPipe when the first actual user selfie/body processing request hits the `/process` endpoint.

---

## 5. Verification Steps

1. Run the server locally:
   ```bash
   cd backend
   python main.py
   ```
2. Verify that the FastAPI app initializes and outputs `Application startup complete` without throwing errors.
3. Test a `/process` request using the mobile app or curl to verify that model loading triggers on demand and runs successfully.
