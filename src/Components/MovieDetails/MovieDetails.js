import './MovieDetails.css'

const MovieDetails = ({singleMovie}) => {
  console.log(singleMovie)
  const backdropImage = {
    backgroundImage: `url(${singleMovie.backdrop_path})`,
    height: "100vh",
    width: "100vw",
    backgroundRepeat: 'no-repeat',
    marginLeft: 'auto',
    marginright: 'auto',
  }

  return (
      <div className="imageDiv" style={backdropImage}>
        <img className="moviePoster" src={singleMovie.poster_path} alt={singleMovie.title} />


        <div className="movieDetails">
          <h2>{singleMovie.title}</h2>
          <p>Average Rating: {singleMovie.average_rating}</p>
          <p>Released on: {singleMovie.release_date}</p>
        </div>
      </div>
  )
}

export default MovieDetails
