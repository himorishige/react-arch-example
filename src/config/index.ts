if (
  process.env.REACT_APP_VITE_SOME_KEY != null &&
  !process.env.REACT_APP_VITE_SOME_KEY
) {
  alert('SOME_KEY is required');
  throw new Error('SOME_KEY is required');
}
export const REACT_APP_VITE_SOME_KEY = process.env.REACT_APP_VITE_SOME_KEY;

if (process.env.REACT_APP_API_URL != null && !process.env.REACT_APP_API_URL) {
  alert('API_URL is required');
  throw new Error('API_URL is required');
}
export const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
