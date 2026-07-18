# Virtual Trail Room Demo (VirtualWardrobe)

A modern virtual trail room mobile application built with **React Native (Expo)** and powered by a high-performance **FastAPI (Python)** backend using MediaPipe and Replicate AI models.

## Repository Architecture

This workspace is structured as a monorepo containing three core components:

1.  **Mobile App (`/`)**: 
    - Expo SDK 56 React Native mobile application.
    - Custom layered 2D Canvas avatar rendering system.
    - Interactive wardrobe, outfit selector, and size picker.

2.  **FastAPI Backend (`/backend`)**:
    - FastAPI python server handling image uploads, face segmenting, and landmarks using MediaPipe.
    - Cloud integration with Replicate APIs for AI Face Swap and IDM-VTON try-on models.

3.  **Vite App (`/app`)**:
    - Vite-based React web sandbox of the virtual wardrobe.
    - Contains static asset patches used locally for avatar generation.

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- Python (v3.10+)
- Android Studio / Xcode (for native simulator running)

### Running the Mobile App
1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up local custom assets (copies premium icons to `./assets`):
   ```bash
   node setup_assets.js
   ```
3. Start Metro bundler:
   ```bash
   npx expo start
   ```

### Running the Backend
See instructions in [backend/README.md](file:///c:/Users/HP/virtual-trail-room-demo/backend/README.md).
