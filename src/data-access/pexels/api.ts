import axios from "axios"

export const pexelsApi = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    Authorization: import.meta.env.
  }
})


