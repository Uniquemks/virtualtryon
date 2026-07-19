import cv2
import numpy as np

# Create a dummy image mimicking the generated avatar
dst = np.zeros((800, 600, 3), dtype=np.uint8)
cv2.rectangle(dst, (200, 100), (400, 700), (200, 160, 131), -1) # generic body

# Create a dummy user face image
src = np.zeros((200, 200, 3), dtype=np.uint8)
cv2.circle(src, (100, 100), 80, (90, 60, 40), -1) # dark skin face

# Create mask
mask = np.zeros((200, 200), dtype=np.uint8)
cv2.circle(mask, (100, 100), 70, 255, -1)

# Center of where to paste
center = (300, 200)

try:
    # Seamless clone requires 3 channels
    blended = cv2.seamlessClone(src, dst, mask, center, cv2.NORMAL_CLONE)
    cv2.imwrite('scratch/blended.png', blended)
    print("Seamless clone successful!")
except Exception as e:
    print("Error:", e)
