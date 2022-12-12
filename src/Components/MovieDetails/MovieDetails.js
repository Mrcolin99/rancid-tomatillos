import { useEffect } from 'react'
import YouTube from 'react-youtube'
import './MovieDetails.css'
import PropTypes from 'prop-types'

const MovieDetails = (
  {singleMovie, title, backdropPath, posterPath, genres, overview,
    averageRating, releaseDate, revenue, runtime,
    fetchSingleMovie, fetchSingleMovieTrailer,
    movieTrailer, id}) => {

  useEffect(() => {
      (async() => {
      await fetchSingleMovie(id)
      await fetchSingleMovieTrailer(id)
    })()
  }, [])

  if(singleMovie === {} || !movieTrailer) {
    return (
      <p>Loading...</p>
    )
  }

  const backdropImage = {
    backgroundImage: `url(${backdropPath})`,
    height: "auto",
    width: "80vw",
    backgroundSize: "cover",
    borderRadius: '10px',
    backgroundRepeat: "no-repeat",
    padding: "20px",
    objectFit: "contain",
  }
  const movieGenres = genres.map(genre => <h3 className='singleGenre' key={ Date.now + genre}>{ genre }</h3>)
  const formatRevenue = Intl.NumberFormat('en-US').format(revenue)
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
          <img className="singleMoviePoster" src={posterPath} alt={title} />
        </div>
        <div className="detailTrailerSection">
          {movieTrailer.videos.length > 0 ?
          <div className="trailerSection">
            <YouTube className="trailers" opts={opts} videoId={movieTrailer.videos[0].key} />
          </div> : <div className="noTrailer"><h1>No Trailer Available</h1></div>}
          <div className="movieDetails">
            <h1>{title}</h1>
            <div className="movieGenreBox">
              { movieGenres }
            </div>
            <h4>{overview}</h4>
            <p>Average Rating: {Math.round(averageRating * 100) / 100}/10</p>
            <p>Release Date: {releaseDate}</p>
            {revenue > 0 && <p>Revenue: ${  formatRevenue }</p>}
            <p>Runtime: { runtime } min.</p>
          </div>
        </div>
    </section>



  )

}

export default MovieDetails

MovieDetails.propTypes = {
  singleMovie: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  backdropPath: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  overview: PropTypes.string.isRequired,
  averageRating: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  revenue: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  fetchSingleMovie: PropTypes.func.isRequired,
  fetchSingleMovieTrailer: PropTypes.func.isRequired,
  movieTrailer: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
}
