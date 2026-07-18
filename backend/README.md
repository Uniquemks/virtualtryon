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

When deploying to [Render](https://render.com/), use the following configurations:

### Option A: Subdirectory Build (Recommended)
Set **Root Directory** to `backend` in the Render web service settings.
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### Option B: Project Root Build
If you leave the **Root Directory** as the repository root:
- **Build Command**: `pip install -r backend/requirements.txt`
- **Start Command**: `uvicorn backend.main:app --host 0.0.0.0 --port $PORT`

### Required Environment Variables
Configure this under the **Environment** tab on Render:
- `REPLICATE_API_TOKEN`: Your Replicate API credentials token.
