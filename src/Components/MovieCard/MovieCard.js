import './MovieCard.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MovieCard = ({id, posterPath, title}) => {
  const moviePoster = (
    <img className="moviePoster"
    src={posterPath}
    alt={title}
  />)

  return (
    <div className="movieCard">
      <Link to={`/${id}`}> {moviePoster} </Link>
    </div>
  )
}

export default MovieCard

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
