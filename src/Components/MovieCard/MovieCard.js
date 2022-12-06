import './MovieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = ({movieInfo, handleClick}) => {
  const moviePoster = (
    <img className="moviePoster"
    onClick={()=> handleClick(movieInfo)}
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
