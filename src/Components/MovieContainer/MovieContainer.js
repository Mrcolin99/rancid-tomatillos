import './MovieContainer.css'
import MovieCard from '../MovieCard/MovieCard.js'

const MovieContainer = ({movies, handleClick}) => {
  const moviesData = movies.map(movie => {
    return (<MovieCard key={movie.id} handleClick={handleClick} movieInfo={movie}/>)
  })

  return (
    <div className="movieContainer">
      {moviesData}
    </div>
  )

}

export default MovieContainer
