// Centralized configuration for API endpoints.
// Modify this file to point to production or local servers.

export const API_CONFIG = {
  // Python FastAPI Backend Base URL
  // Default for local development is http://127.0.0.1:5001 or machine IP for mobile emulators.
  BACKEND_BASE_URL: 'http://127.0.0.1:5001',

  // Endpoints
  PROCESS_AVATAR: 'http://127.0.0.1:5001/process',
  VIRTUAL_TRYON: 'http://127.0.0.1:5001/tryon',

  // Wardrobe / Products APIs
  CLOTHES_API: 'https://instastyles.in/script/app/WebserviceApi/MalefetchPriceandDress.php',
  COMBOS_API: (termId: string | number) => `https://instastyles.in/script/app/WebserviceApi/combinations.php?id=${termId}&_=${Date.now()}`,
};
