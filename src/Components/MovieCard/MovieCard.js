import './MovieCard.css'

const MovieCard = ({movieInfo, handleClick}) => {
  console.log(movieInfo)
  const moviePoster = (
    <img className="moviePoster"
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
