# Virtual Wardrobe — FastAPI Backend

This is the Python FastAPI backend for the Virtual Trail Room (VirtualWardrobe) mobile application. It handles MediaPipe pose landmarker analysis, skin tone calculation, and communicates with Replicate for AI face swaps (`codeplugtech/face-swap`) and virtual try-ons (`cuuupid/idm-vton`).

---

## 1. Local Development Setup

### Prerequisites
- Python 3.10 or higher
- Pip

### Installation
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Copy the environment template:
   ```bash
   cp .env.example .env
   ```
5. Open `.env` and fill in your `REPLICATE_API_TOKEN`.

### Running Locally
Run the server with Uvicorn:
```bash
uvicorn main:app --host 0.0.0.0 --port 5001 --reload
```
The server will start at `http://127.0.0.1:5001`.

---

## 2. Render Production Deployment

To run MediaPipe and OpenCV successfully in headless production without missing OpenGL library errors (`libGLESv2.so.2`), deploy this service using **Docker**.

### Render Configuration Settings

When creating a new **Web Service** on Render, configure it with the following settings:

1. **Runtime**: Select **Docker** (instead of Python).
2. **Root Directory**: Set to `.` (the project root, so that the build context can access both the backend code and the patch assets).
3. **Dockerfile Path**: Set to `backend/Dockerfile` (or `Dockerfile` if you move it to the root).
4. **Environment Variables**:
   * `REPLICATE_API_TOKEN`: Your private token key obtained from Replicate.
   * `PORT`: Set by Render automatically (e.g., `10000`), or defaults to `10000` if not set.

### Local Docker Verification (Optional)

If you want to build and run the Docker container locally:
```bash
# From the project root directory
docker build -f backend/Dockerfile -t virtualtryon-backend .

# Run the container locally (passing your API token)
docker run -p 5001:10000 -e REPLICATE_API_TOKEN="your_token_here" virtualtryon-backend
```
The server will start locally on port 5001 using the Docker environment.

