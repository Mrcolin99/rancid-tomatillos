import { useEffect } from 'react'
import './MovieDetails.css'

const MovieDetails = ({singleMovie, fetchSingleMovie, id}) => {
  console.log(singleMovie)
  useEffect(() => {
    fetchSingleMovie(id)
  }, [])

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
          <p>Average Rating: {Math.round(singleMovie.average_rating * 100) / 100}</p>
          <p>Released on: {singleMovie.release_date}</p>
        </div>
      </div>
  )
}

export default MovieDetails
