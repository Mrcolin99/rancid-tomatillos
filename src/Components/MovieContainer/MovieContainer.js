import './MovieContainer.css'
import MovieCard from '../MovieCard/MovieCard.js'

const MovieContainer = ({movies}) => {
  const moviesData = movies.map(movie => {
    return (<MovieCard key={movie.id}  movieInfo={movie}/>)
  })

  return (
    <div className="movieContainer">
      {moviesData}
    </div>
  )

}

export default MovieContainer
