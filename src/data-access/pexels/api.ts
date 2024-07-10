import axios from "axios";

export const pexelsApi = axios.create({
  baseURL: import.meta.env.VITE_PEXELS_BASE_URL,
  headers: {
    Authorization: import.meta.env.VITE_PEXELS_API_KEY,
  },
});
