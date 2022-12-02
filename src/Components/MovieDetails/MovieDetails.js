import './MovieDetails.css'

const MovieDetails = ({singleMovie}) => {
  console.log(singleMovie)
  return (

    <div className="imageDiv">
      <img className="moviePoster" src={singleMovie.poster_path} alt={singleMovie.title} />
      <img className="movieBackdrop" src={singleMovie.backdrop_path} alt="Scene from the film" />

      <div className="movieDetails">
        <h2>{singleMovie.title}</h2>
        <p>Average Rating: {singleMovie.average_rating}</p>
        <p>Released on: {singleMovie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieDetails
