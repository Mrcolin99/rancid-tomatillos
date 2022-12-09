import { useEffect } from 'react'
import YouTube from 'react-youtube'
import './MovieDetails.css'

const MovieDetails = ({singleMovie, fetchSingleMovie, fetchSingleMovieTrailer, movieTrailer, id}) => {
  useEffect(() => {
    fetchSingleMovie(id)
    fetchSingleMovieTrailer(id)
  }, [])

  if(!singleMovie) {
    return (
      <p>Loading...</p>
    )
  }

  const backdropImage = {
    backgroundImage: `url(${singleMovie.backdrop_path})`,
    height: "auto",
    width: "80vw",
    backgroundSize: "cover",
    borderRadius: '10px',
    backgroundRepeat: "no-repeat",
    padding: "20px",
    objectFit: "contain",
  }
  const movieGenres = singleMovie.genres.map(genre => <h3 className='singleGenre' key={ Date.now + genre}>{ genre }</h3>)
  const formatRevenue = Intl.NumberFormat('en-US').format(singleMovie.revenue)
  const opts = {
      height: '250vh',
      width: '400vw',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

  return (
      <section className="detailsSection" style={backdropImage}>
        <div>
          <img className="singleMoviePoster" src={singleMovie.poster_path} alt={singleMovie.title} />
        </div>
        <div className="detailTrailerSection">
          {movieTrailer.videos.length > 0 ?
          <div className="trailerSection">
            <YouTube className="trailers" opts={opts} videoId={movieTrailer.videos[0].key} />
          </div> : <h1>Loading...</h1>}
          <div className="movieDetails">
            <h1>{singleMovie.title}</h1>
            <div className="movieGenreBox">
              { movieGenres }
            </div>
            <h4>{singleMovie.overview}</h4>
            <p>Average Rating: {Math.round(singleMovie.average_rating * 100) / 100}/10</p>
            <p>Release Date: {singleMovie.release_date}</p>
            {singleMovie.revenue > 0 && <p>Revenue: ${  formatRevenue }</p>}
            <p>Runtime: { singleMovie.runtime } min.</p>
          </div>
        </div>
      </section>
  )

}

export default MovieDetails
