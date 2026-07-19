# Use an official lightweight Python image
FROM python:3.10-slim

# Install system libraries required by MediaPipe, OpenCV, GLib, and X11
RUN apt-get update && apt-get install -y \
    libgl1 \
    libgles2 \
    libegl1 \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender1 \
    && rm -rf /var/lib/apt/lists/*

# Set working directory inside the container
WORKDIR /app

# Copy the requirements file from the backend folder (context: project root)
COPY backend/requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend source code into the container
COPY backend/ .

# Package the patch assets from the frontend public folder into the container's patches folder
COPY app/public/patches/ ./patches/

# Expose port (Render uses $PORT environment variable, default to 10000)
EXPOSE 10000

# Docker Healthcheck instruction calling the dynamic /health endpoint
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD python -c "import urllib.request, os; port = os.environ.get('PORT', '10000'); urllib.request.urlopen(f'http://localhost:{port}/health')" || exit 1

# Start the application
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-10000}"]
