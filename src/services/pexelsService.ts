import { pexelsApi } from "../data-access/pexels/api"
import { PhotoPagination } from "../data-access/pexels/pexels.model"

export const randomPhotos = async (page = 1): Promise<PhotoPagination> => {
  const response = await pexelsApi.get("/curated", {
    params: {
      page,
      per_page: 15
    }
  })
  return response.data
}

export const searchPhotos = async (page = 1, query: string): Promise<PhotoPagination> => {
  const response = await pexelsApi.get("/search", {
    params: {
      query, page, per_page: 15
    }
  })
  return response.data
}
