# FINAL APK PRODUCTION AUDIT REPORT

**Date:** July 18, 2026  
**Auditor:** Antigravity AI  
**Project:** Virtual Trail Room (VirtualWardrobe) Mobile App  
**Target:** Production Android APK Build  
**Status:** ❌ NOT READY  

---

## 1. Executive Summary

A comprehensive, file-by-file production audit was performed on the React Native/Expo frontend and FastAPI backend. While the code base contains a well-structured avatar-draping engine, the project is **not ready** to build or deploy a production Android APK. 

Multiple critical blockers exist, including a hardcoded local host IP address that will fail on mobile devices, cleartext HTTP connection restrictions, hardcoded cloud credentials, and rendering incompatibilities with the `.avif` image format on a large percentage of Android devices.

---

## 2. Architecture Review

The application is structured as a monorepo consisting of:
1. **Frontend (Expo SDK 56)**: Cross-platform mobile app rendering a layered 2D avatar canvas.
2. **Backend (FastAPI)**: Python server running MediaPipe pose landmarker / segmenter and integrating with Replicate's `face-swap` and `idm-vton` models.
3. **Web Sandbox (`app/`)**: A Vite-based React wrapper used for web testing.

The current system relies on local filesystem sharing for avatar assets (`app/public/patches` is read directly by both the frontend and the local Python backend). While functional on a single developer machine, this tight coupling creates severe architectural challenges for standalone production packaging.

---

## 3. Folder Analysis

Below is an audit of the primary folders in the workspace:

| Folder Path | Purpose | Audit / Issues |
| :--- | :--- | :--- |
| `src/` | Main Expo React Native source code. | Correctly structured. |
| `src/assets/` | Local assets: underwear, accessories, clothes, body templates. | **High Alert**: Contains uncompressed `.png` thumbnails and `.avif` files. |
| `src/components/` | Reusable React Native UI elements. | Contains `AvatarCanvas.tsx` and `LegacyTryOnFlow.tsx`. |
| `src/config/` | Config tables for garments, outfits, and APIs. | **Critical Alert**: `apiConfig.ts` contains local loopback IP `127.0.0.1`. |
| `src/store/` | React Context for state management (`avatarStore.tsx`). | Well-implemented. |
| `src/utils/` | Patch resolvers, wardrobe registries, and rules engine. | `patchResolver.ts` is exceptionally large (259KB) but works. |
| `backend/` | FastAPI Python backend directory. | **Critical Alert**: Contains hardcoded credentials. Lacks isolation from frontend assets. |
| `app/` | Separate Vite web application. | Used for web deployment. Contains `public/patches` which the backend relies on. |
| `Light-M Body.../` | Duplicate body templates directory at workspace root. | **Duplicate**: Safe to remove. Not required by the bundler. |
| `male underwear.../` | Duplicate underwear directory at workspace root. | **Duplicate**: Safe to remove. Not required by the bundler. |

---

## 4. Asset Verification

A scan of the local assets revealed major production issues:

### 4.1 Thumbnail File Size Bloat
*   **Location**: `src/assets/thumbnail img for  wardrobe/`
*   **Issue**: Thumbnails are raw, uncompressed PNG files ranging from **800 KB to 1.5 MB** each (e.g., `jeans.png` is 1.44 MB, `cap.png` is 1.49 MB, `sweater.png` is 1.18 MB). 
*   **Total Size**: Over **30 MB** for just 31 thumbnail images.
*   **Production Impact**: Large APK size and high memory consumption. Rendering 30+ large files simultaneously in a menu can lead to UI lag and Out-of-Memory (OOM) crashes on lower-end Android devices.

### 4.2 AVIF Format Incompatibility
*   **Location**: `src/assets/clothes/` and `src/assets/underwear/`
*   **Issue**: Clothing patches (e.g. `sh1.avif` at ~8-10 KB) are formatted as `.avif`. 
*   **Production Impact**: The frontend uses standard React Native `<Image>` components ([AvatarCanvas.tsx](file:///c:/Users/HP/virtual-trail-room-demo/src/components/Avatar/AvatarCanvas.tsx#L106)). Android natively decodes AVIF only from Android 12 (API level 31) onwards. On Android 11 or lower, all AVIF clothes layers will be **completely invisible**.
*   **Solution**: Convert all `.avif` assets to `.webp` (fully compatible with Android 4.0+) or migrate to `expo-image`, which bundles software decoders.

---

## 5. Backend Verification

### 5.1 Local Paths Dependency
*   **Location**: [backend/main.py:L46-48](file:///c:/Users/HP/virtual-trail-room-demo/backend/main.py#L46-L48)
*   **Issue**: The backend resolves `PATCHES_DIR` by looking for `../app/public/patches` if the local path doesn't exist.
*   **Production Impact**: If the backend is deployed to a cloud provider, it will fail to find patches because `../app/` is a local directory structure not packaged with the backend.

### 5.2 Concurrent Writing Race Conditions
*   **Location**: [backend/main.py:L446-447](file:///c:/Users/HP/virtual-trail-room-demo/backend/main.py#L446-L447)
*   **Issue**: The backend saves files to static local names `temp_swap.png` and `temp_target.png`.
*   **Production Impact**: Multiple concurrent users calling the API will overwrite each other's temporary images, leading to corrupt face-swaps or mixed user outputs.

---

## 6. API & Network Audit

### 6.1 Loopback API Blockers
*   **Location**: [apiConfig.ts:L7-11](file:///c:/Users/HP/virtual-trail-room-demo/src/config/apiConfig.ts#L7-L11)
*   ```typescript
    BACKEND_BASE_URL: 'http://127.0.0.1:5001',
    PROCESS_AVATAR: 'http://127.0.0.1:5001/process',
    VIRTUAL_TRYON: 'http://127.0.0.1:5001/tryon',
    ```
*   **Why it fails**: 
    1. An APK running on an Android device treats `127.0.0.1` as the phone itself, causing instantaneous connection failure to the computer's backend.
    2. Android blocks cleartext HTTP (`http://`) connections by default. 

---

## 7. Dependency Audit

### 7.1 Mismatches & Missing Packages
*   **Missing Native Image Picker**: `LegacyTryOnFlow.tsx` has code branching for `Platform.OS === 'web'` to trigger file inputs. On native Android, nothing happens. The app is missing the `expo-image-picker` library, preventing native users from taking selfies or choosing body images.
*   **Missing AVIF Image Support**: Since AVIF is heavily utilized, the project is missing `expo-image` to support AVIF rendering on older Android systems.
*   **Expo SDK Compatibility**: Expo SDK 56 and React Native 0.85.3 are compatible, which is a verified stable stack.

---

## 8. Security Audit

*   **API Token Leak**: [backend/main.py:L440](file:///c:/Users/HP/virtual-trail-room-demo/backend/main.py#L440) hardcodes the Replicate API token (`r8_AFbxVvQNlR2Te19...`). Anyone extracting this file or viewing the git history can steal the token.
*   **Lack of Root .gitignore**: The project root is missing a `.gitignore`. Running builds creates large `android/` folders and node caches that will clutter the repository.
*   **Lack of Backend Security**: The FastAPI endpoints have no authentication or request verification, opening them to public abuse.

---

## 9. Performance Audit

*   **Memory Footprint**: Loading 30+ uncompressed PNG thumbnails (1 MB+ each) simultaneously will cause high RAM usage, slow load times, and potential crashes.
*   **Bundle Size**: Bundled assets are ~40 MB. This makes the final APK file unnecessarily large.

---

## 10. Android Configuration Audit

*   **Status**: Satisfactory after recent modifications.
*   **Package Name**: Properly configured to `"package": "com.virtualwardrobe.app"` in `app.json`.
*   **Assets Configuration**: Target files (`icon.png`, `splash.png`, `adaptive-icon.png`) must exist in the root `./assets/` directory before building. This is resolved only *after* running `node setup_assets.js`.

---

## 11. APK Build Simulation

A simulation of `npx expo prebuild` and Gradle compilation projects:

1.  **If `node setup_assets.js` has NOT been run**: `npx expo prebuild` will fail immediately because Expo cannot find `./assets/icon.png` or `./assets/splash.png` as referenced in `app.json`.
2.  **If assets are set up**: Gradle build will compile a debug APK successfully, but the resulting app will be non-functional (cannot upload photos, cannot load AVIF garments on Android < 12, cannot connect to backend).

---

## 12. Risks

1.  **Crash Risk (High)**: OOM crashes on budget devices during wardrobe browsing.
2.  **Security Risk (High)**: Leaking the Replicate API token.
3.  **Functional Risk (Critical)**: Zero network connectivity to the FastAPI server.

---

## 13. Required Fixes

To safely build a production-ready APK, the following fixes are required:

### Blocker 1: Configure Environment Variables for Backend
Modify `backend/main.py` to read Replicate API tokens from environment variables rather than hardcoding.
```python
import os
REPLICATE_API_TOKEN = os.getenv("REPLICATE_API_TOKEN")
```

### Blocker 2: Change API Host Endpoint
Change `src/config/apiConfig.ts` to utilize the host computer's IP address (for local testing, e.g., `192.168.x.x`) or a production HTTPS URL. Configure the Android network security configuration to allow cleartext HTTP if testing locally.

### Blocker 3: Optimize Wardrobe Thumbnails
Resize the 31 thumbnails to `150x150` pixels and convert them to compressed WebP. This will reduce folder size from ~30 MB to less than 400 KB.

### Blocker 4: Add `expo-image` for AVIF Support
Install `expo-image` and replace React Native's `<Image>` with `Image` from `expo-image` inside `AvatarCanvas.tsx` to handle `.avif` formats on older Android versions.

### Blocker 5: Integrate `expo-image-picker`
Install `expo-image-picker` and implement native camera/gallery selection in `LegacyTryOnFlow.tsx`.

---

## 14. Production Readiness Score

*   **Architecture**: 6 / 10  
*   **Frontend**: 5 / 10  
*   **Backend**: 4 / 10  
*   **Assets**: 3 / 10  
*   **Performance**: 4 / 10  
*   **Security**: 2 / 10  
*   **Android Compatibility**: 3 / 10  
*   **Expo Compatibility**: 9 / 10  
*   **Overall Score**: **4.5 / 10**  

---

## 15. Final Recommendation

**❌ NOT READY**

The project requires resolving the critical blockers listed above (specifically API host configuration, Replicate token exposure, and AVIF image decoding support) before proceeding with production Android APK generation.
