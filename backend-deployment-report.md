# FastAPI Backend — Docker Deployment & Production Readiness Report

**Date:** July 19, 2026  
**Status:** 🐳 DOCKER DEPLOYMENT SECURED AND READY FOR RENDER

This report documents the migration of the FastAPI backend to a Dockerized environment to resolve the missing OpenGL system library errors (`libGLESv2.so.2` and `libGL.so.1`) when running MediaPipe and OpenCV on Render.

---

## 1. Docker Build Context & Image Layout

### Build Context Used
*   **Build Context**: Project Root (`.`)
*   **Dockerfile Path**: `backend/Dockerfile`
*   **Rationale**: By using the project root as the build context, the build process has access to both the Python source files under `backend/` and the frontend body patches located under `app/public/patches/`. This avoids duplicate assets in the Git repository while packaging everything neatly into a self-contained container.

### Container Directory Structure (`/app`)
Inside the final container, the files are structured as follows to ensure relative file references in the code resolve correctly:
```
/app/
├── main.py                     # FastAPI entry point
├── requirements.txt            # Python dependencies
├── pose_landmarker_lite.task   # MediaPipe model (cached/downloaded if missing)
├── selfie_segmenter.tflite     # MediaPipe segmenter model (cached/downloaded)
├── patches/                    # Body patches copied from app/public/patches/
│   ├── A/FACE.webp
│   ├── AA/AA[1-5].webp
│   ├── B/                      # B1-B6 subdirectories
│   ├── C/
│   ├── D/
│   ├── E/
│   ├── F/
│   ├── G/
│   ├── H/
│   └── Shoulder/
└── temp_*.png                  # Temporary processing storage
```

---

## 2. Installed System Libraries

To support CPU-based image processing, graphics loading, and MediaPipe execution in a headless environment, the following debian system libraries are installed in the base image (`python:3.10-slim`):

| Library Name | Purpose |
| :--- | :--- |
| `libgl1` | Mesa OpenGL library, required for basic graphics/image drawing functions |
| `libgles2` | OpenGL ES v2 library, required for MediaPipe GPU/CPU fallback graphics pipelines |
| `libglib2.0-0` | GLib Core Utility library, required by OpenCV bindings |
| `libsm6` | Session Management library, required for X11/OpenCV compatibility |
| `libxext6` | X11 Miscellaneous Extensions library, required for OpenCV rendering operations |
| `libxrender1` | X11 Render Extension library, required for OpenCV color manipulations |

---

## 3. Render Configuration Parameters

To deploy this backend as a Docker service on Render, use the following parameters in your Render dashboard:

| Setting | Value | Description |
| :--- | :--- | :--- |
| **Runtime** | `Docker` | Tells Render to build the container instead of python VM |
| **Root Directory** | `.` (Project Root) | Ensures the build context has access to `app/public/patches` |
| **Dockerfile Path**| `backend/Dockerfile` | Points Render to the Dockerfile in the `backend` subdirectory |
| **Plan** | `Web Service` | Standard Render service type |

### Environment Variables
Configure these in the **Environment** tab:
*   `REPLICATE_API_TOKEN`: Your API token obtained from Replicate (used for face swap and IDM-VTON draping).
*   `PORT`: Set automatically by Render (default is `10000` internally).

---

## 4. Verification Checklist

- **[x] Build Context & Paths**: Dockerfile written with relative COPY instructions mapping to `/app` and `/app/patches/`.
- **[x] MediaPipe & OpenCV Libraries**: Added `libgl1`, `libgles2`, `libglib2.0-0`, `libsm6`, `libxext6`, and `libxrender1` to Dockerfile `apt-get` commands.
- **[x] Self-Contained Assets**: Patches copied into the container's `./patches/` directory which matches the expected folder structure for `main.py` when it checks for `os.path.exists('patches')`.
- **[x] Startup Command**: Configured `uvicorn main:app --host 0.0.0.0 --port ${PORT}` dynamically utilizing the port provided by Render.
- **[x] Clean Cache**: Added `--no-cache-dir` to `pip install` to optimize build speed and image size.
