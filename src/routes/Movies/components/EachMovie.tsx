import React from 'react'
import { useNavigate } from "react-router-dom";


interface Props {
  movie: {
    id: number,
    title: string,
    poster_path: string,
  }
}



export default function EachMovie({ movie }: Props) {

  let navigate = useNavigate();


  const goToMovie = () => {
    navigate(`/movie/${movie.id}`);
  }

  return (
    <div data-testid={`movie-item-${movie.id}`} onClick={goToMovie} className='movie__wrapper cursor-pointer'>
      {
        movie.poster_path ?
          <img className='poster width-100 height-100' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
          :
          <img className='poster width-100 height-100' src='https://wipfilms.net/wp-content/uploads/2016/05/No_Poster-1.JPEG' alt="" />
      }
      <h4 className='movie__title'>{movie.title && movie.title}</h4>
    </div>
  )
}
