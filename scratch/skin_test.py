import cv2
import numpy as np

# Load a generic patch to test
img = cv2.imread('app/public/patches/C/C1.webp', cv2.IMREAD_UNCHANGED)
generic_bgr = np.array([131.0, 160.0, 204.0])

# Simulate a dark skin user BGR (e.g., [40, 60, 90] dark brown)
user_bgr = np.array([40.0, 60.0, 90.0])

# LAB Transformation
target_lab = cv2.cvtColor(np.uint8([[user_bgr]]), cv2.COLOR_BGR2LAB)[0][0]
source_lab = cv2.cvtColor(np.uint8([[generic_bgr]]), cv2.COLOR_BGR2LAB)[0][0]

l_diff = int(target_lab[0]) - int(source_lab[0])
a_diff = int(target_lab[1]) - int(source_lab[1])
b_diff = int(target_lab[2]) - int(source_lab[2])

print(f"LAB Diffs: L={l_diff}, A={a_diff}, B={b_diff}")

alpha_mask = img[:, :, 3] > 0
bgr = img[:, :, :3]

lab = cv2.cvtColor(bgr, cv2.COLOR_BGR2LAB).astype(np.int16)
lab[:, :, 0] += l_diff
lab[:, :, 1] += a_diff
lab[:, :, 2] += b_diff

lab = np.clip(lab, 0, 255).astype(np.uint8)
new_bgr = cv2.cvtColor(lab, cv2.COLOR_LAB2BGR)

# Apply mask
img[:, :, :3] = np.where(alpha_mask[:, :, None], new_bgr, bgr)

# Save result to see if it looks good
cv2.imwrite('scratch/test_dark_skin.png', img)
