import { Pagination } from "@mui/material"
import { ChangeEvent } from "react"

interface PaginatorProps {
  count: number,
  page: number,
  onChange: (page: number) => void
}

export const Paginator = ({ count, page, onChange }: PaginatorProps) => {
  const handleOnPageChange = (e: ChangeEvent<unknown>, page: number) => {
    onChange(page)
  }

  return (
    <div className="flex justify-center ">
      <Pagination count={count} color="primary" page={page} onChange={handleOnPageChange} />
    </div>
  )

}
