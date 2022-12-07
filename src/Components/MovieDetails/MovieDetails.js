import { useEffect } from 'react'
import './MovieDetails.css'

const MovieDetails = ({singleMovie, fetchSingleMovie, id}) => {
  useEffect(() => {
    fetchSingleMovie(id)

  }, [])

  if(!singleMovie) {
    return (
      <p>loading...</p>
    )
  } else {
  const backdropImage = {
    backgroundImage: `url(${singleMovie.backdrop_path})`,
    height: "auto",
    width: "80vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "20px"

  }


  return (
      <section className="detailsSection" style={backdropImage}>
        <img className="moviePoster" src={singleMovie.poster_path} alt={singleMovie.title} />
        <div className="movieDetails">
          <h2>{singleMovie.title}</h2>
          <p>Average Rating: {Math.round(singleMovie.average_rating * 100) / 100}</p>
          <p>Released on: {singleMovie.release_date}</p>
        </div>
      </section>
  )}
}

export default MovieDetails
