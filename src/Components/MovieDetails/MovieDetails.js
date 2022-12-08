import { useEffect } from 'react'
import './MovieDetails.css'

const MovieDetails = ({singleMovie, fetchSingleMovie, id}) => {
  useEffect(() => {
    fetchSingleMovie(id)
    console.log(singleMovie)
  }, [])

  if(!singleMovie) {
    return (
      <p>Loading...</p>
    )
  }
  const backdropImage = {
    backgroundImage: `url(${singleMovie.backdrop_path})`,
    height: "30vh auto",
    width: "80vw",
    backgroundSize: "cover",
    borderRadius: '10px',
    backgroundRepeat: "no-repeat",
    padding: "20px",
    objectFit: "contain"
  }
  // const movieGenres = singleMovie.genres.map(genre => <li className='singleGenre' key={ Date.now + genre}>{ genre }</li>)


  return (
      <section className="detailsSection" style={backdropImage}>
        <img className="singleMoviePoster" src={singleMovie.poster_path} alt={singleMovie.title} />
        <div className="movieDetails">
          <h1>{singleMovie.title}</h1>
          <h4>{singleMovie.overview}</h4>
          <ul>{ singleMovie.genres }</ul>
          <p>Average Rating: {Math.round(singleMovie.average_rating * 100) / 100}</p>
          <p>Released on: {singleMovie.release_date}</p>
          <p>Revenue: { singleMovie.revenue }</p>
          <p>Runtime: { singleMovie.runtime }</p>
        </div>
      </section>
  )
}

export default MovieDetails
