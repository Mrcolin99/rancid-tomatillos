import './MovieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = ({movieInfo}) => {
  const moviePoster = (
    <img className="moviePoster"
    src={movieInfo.poster_path}
    alt={movieInfo.title}
  />)

  return (
    <div className="movieCard">
      <Link to={`/${movieInfo.id}`}> {moviePoster} </Link>
    </div>
  )
}

export default MovieCard
