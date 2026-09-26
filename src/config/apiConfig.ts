// Centralized configuration for API endpoints.
// Production Render Backend: https://virtualtryon-1-i8wr.onrender.com

const PROD_BACKEND_URL = 'https://virtualtryon-1-i8wr.onrender.com';

const resolveBackendUrl = (): string => {
  // 1. Vite environment variable (import.meta.env)
  try {
    if (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_API_URL) {
      return (import.meta as any).env.VITE_API_URL.replace(/\/+$/, '');
    }
  } catch (e) {}

  // 2. Process environment variables (Expo / Webpack / Node)
  try {
    if (typeof process !== 'undefined' && process.env) {
      const envUrl = process.env.VITE_API_URL || process.env.EXPO_PUBLIC_API_URL;
      if (envUrl) {
        return envUrl.replace(/\/+$/, '');
      }
    }
  } catch (e) {}

  // 3. Fallback to production Render backend
  return PROD_BACKEND_URL;
};

const BACKEND_BASE_URL = resolveBackendUrl();

export const API_CONFIG = {
  // Python FastAPI Backend Base URL
  BACKEND_BASE_URL,

  // Endpoints
  PROCESS_AVATAR: `${BACKEND_BASE_URL}/process`,
  VIRTUAL_TRYON: `${BACKEND_BASE_URL}/tryon`,

  // Wardrobe / Products APIs
  CLOTHES_API: 'https://instastyles.in/script/app/WebserviceApi/MalefetchPriceandDress.php',
  COMBOS_API: (termId: string | number) => `https://instastyles.in/script/app/WebserviceApi/combinations.php?id=${termId}&_=${Date.now()}`,
};
