/**
 * TROJANS COLLECTIVE — API CLIENT & BACKEND INTEGRATION LAYER
 * 
 * Configured for future Node.js / Express / MongoDB / Cloudinary backend.
 * Falls back to local static data when VITE_API_URL is not defined.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * Universal fetch client with error handling & headers
 */
export async function apiClient(endpoint, options = {}) {
  // If no backend is configured yet, reject to trigger local fallback cleanly
  if (!API_BASE_URL) {
    return Promise.reject(new Error('LOCAL_MODE_ACTIVE'));
  }

  const url = `${API_BASE_URL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const error = new Error(errorBody.message || `API error: ${response.status}`);
    error.status = response.status;
    throw error;
  }

  return response.json();
}

export default apiClient;
