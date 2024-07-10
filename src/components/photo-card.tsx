import { Card, CardHeader, CardMedia, CardActions } from "@mui/material"
import { Link } from "react-router-dom"
import { Photo } from "../data-access/pexels/pexels.model"

interface PhotoCardProps {
  photo: Photo
}

export const PhotoCard = ({ photo }: PhotoCardProps) => {

  return (
    <Card sx={{ maxWidth: 500 }} key={photo.url}>
      <CardHeader title={photo.photographer} subheader={photo.alt || "Untitled"} />
      <CardMedia
        component="img"
        alt={photo.alt}
        image={photo.src.large}
        sx={{ objectFit: "cover", height: '400px' }}
      />
      <CardActions>
        <Link to={photo.photographer_url} className="text-pink-600" target="_blank">{photo.photographer}</Link>
      </CardActions>
    </Card>

  )
}
