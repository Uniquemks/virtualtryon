import urllib.request
import sys
import uuid

boundary = uuid.uuid4().hex
with open('app/public/patches/A/FACE.webp', 'rb') as f:
    img_data = f.read()

body = (
    b'--' + boundary.encode() + b'\r\n'
    b'Content-Disposition: form-data; name="image"; filename="face.webp"\r\n'
    b'Content-Type: image/webp\r\n\r\n' +
    img_data +
    b'\r\n--' + boundary.encode() + b'--\r\n'
)

req = urllib.request.Request('http://127.0.0.1:5000/process', data=body)
req.add_header('Content-Type', f'multipart/form-data; boundary={boundary}')

try:
    resp = urllib.request.urlopen(req)
    print("SUCCESS")
except Exception as e:
    print('Error:', e)
    if hasattr(e, 'read'):
        print(e.read().decode())
