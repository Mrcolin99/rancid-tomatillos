import './MovieContainer.css'
import MovieCard from '../MovieCard/MovieCard.js'
import PropTypes from 'prop-types'

const MovieContainer = ({movies}) => {
  const moviesData = movies.map(movie => {
    return (<MovieCard key={movie.id} posterPath={movie.poster_path} title={movie.title} id={movie.id} />)
  })

  return (
    <div className="movieContainer">
      {moviesData}
    </div>
  )

}

export default MovieContainer

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired
}
