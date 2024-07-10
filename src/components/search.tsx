import { TextField } from "@mui/material"
import { ChangeEvent } from "react";

interface SearchProps {
  value: string;
  onChange: (query: string) => void
}

export const Search = ({ value, onChange }: SearchProps) => {
  const handleOnQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="flex justify-center">
      <TextField placeholder="Search" sx={{ width: "40rem" }} variant="standard" value={value} onChange={handleOnQueryChange} />
    </div>
  )
}
