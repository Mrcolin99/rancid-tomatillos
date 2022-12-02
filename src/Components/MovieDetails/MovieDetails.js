import './MovieDetails.css'

const MovieDetails = ({singleMovie}) => {
  console.log(singleMovie)
  return (

    <div className="imageDiv">
      <img className="moviePoster" src={singleMovie.poster_path} alt={singleMovie.title} />
      <img className="moviePoster" src={singleMovie.backdrop_path} alt="Scene from the film" />

      <div className="movieDetails">
        <h2>{singleMovie.title}</h2>
        <p>{singleMovie.average_rating}</p>
      </div>
    </div>
  )
}

export default MovieDetails
