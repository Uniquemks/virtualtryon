// Centralized configuration for API endpoints.
// Modify this file to point to production or local servers.

export const API_CONFIG = {
  // Python FastAPI Backend Base URL
  // Default for local development is http://127.0.0.1:5001 or machine IP for mobile emulators.
  BACKEND_BASE_URL: 'https://virtualtryon-9vn4.onrender.com',

  // Endpoints
  PROCESS_AVATAR: 'https://virtualtryon-9vn4.onrender.com/process',
  VIRTUAL_TRYON: 'https://virtualtryon-9vn4.onrender.com/tryon',

  // Wardrobe / Products APIs
  CLOTHES_API: 'https://instastyles.in/script/app/WebserviceApi/MalefetchPriceandDress.php',
  COMBOS_API: (termId: string | number) => `https://instastyles.in/script/app/WebserviceApi/combinations.php?id=${termId}&_=${Date.now()}`,
};
