import './MovieCard.css'

const MovieCard = ({movieInfo, handleClick}) => {
  const moviePoster = (
    <img onClick={() => handleClick(movieInfo)}className="moviePoster"
    src={movieInfo.poster_path}
    alt={movieInfo.title}
  />)

  return (
    <div className="movieCard">
      <div> {moviePoster} </div>
    </div>
  )
}

export default MovieCard
