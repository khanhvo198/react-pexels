import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { Photo } from "../data-access/pexels/pexels.model"
import useDebounce from "../hooks/debounce";
import { randomPhotos, searchPhotos } from "../services/pexelsService";
import { Paginator } from "./paginator";
import { PhotoCard } from "./photo-card"
import { Search } from "./search";

interface PhotosGridProps {
  withSearch?: boolean
}

export const PhotosGrid = ({ withSearch = false }: PhotosGridProps) => {

  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("nature")
  const [totalPage, setTotalPage] = useState<number>(0)
  const debounceQuery = useDebounce<string>(query, 500)
  const debouncePage = useDebounce<number>(page, 500)

  const queryOptions = withSearch ? { queryKey: ["home", debouncePage, debounceQuery], queryFn: () => searchPhotos(debouncePage, debounceQuery), placeholderData: keepPreviousData } :
    { queryKey: ["random", page], queryFn: () => randomPhotos(page), placeholderData: keepPreviousData }


  const { isPending, data } = useQuery(queryOptions);

  const totalResults = data?.total_results ? data.total_results : 0

  useMemo(() => {
    const perPage = data?.per_page ? data.per_page : 1;
    const totalPage = Math.ceil(totalResults / perPage)
    setTotalPage(totalPage)
  }, [totalResults])

  const handleOnQueryChange = (query: string) => {
    setQuery(query)
    setPage(1)
  }

  const handleOnPageChange = (page: number) => {
    setPage(page)
  }

  return (
    <div className="flex flex-col justify-center p-4 gap-4">
      <Paginator count={totalPage} page={page} onChange={handleOnPageChange} />
      {withSearch && <Search value={query} onChange={handleOnQueryChange} />}
      {
        isPending ? <div>...Loading</div> :
          <div className="grid grid-cols-2 gap-10 p-12">
            {data?.photos.map((photo) => {
              return <PhotoCard photo={photo} />
            })}
          </div>
      }
    </div>
  )
}
