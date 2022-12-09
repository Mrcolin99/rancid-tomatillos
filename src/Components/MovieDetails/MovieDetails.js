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
    height: "30vh auto",
    width: "80vw",
    backgroundSize: "cover",
    borderRadius: '10px',
    backgroundRepeat: "no-repeat",
    padding: "20px",
    objectFit: "contain"
  }
  const movieGenres = singleMovie.genres.map(genre => <h4 className='singleGenre' key={ Date.now + genre}>{ genre }</h4>)
  const formatRevenue = Intl.NumberFormat('en-US').format(singleMovie.revenue)
  // const trailer = movieTrailer.videos.map(video => <YouTube videoId={video.key}/>)
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
        <div className="trailerSection">
          <YouTube className="trailers" opts={opts} videoId={movieTrailer.videos[1].key} />
        </div>
          <div className="movieDetails">
            <h1>{singleMovie.title}</h1>
            <h4>{singleMovie.overview}</h4>
            <p>Average Rating: {Math.round(singleMovie.average_rating * 100) / 100}/10</p>
            <p>Release Date: {singleMovie.release_date}</p>
            {singleMovie.revenue > 0 && <p>Revenue: ${  formatRevenue }</p>}
            <p>Runtime: { singleMovie.runtime } min.</p>
            <div className="movieGenreBox">
              { movieGenres }
            </div>
          </div>
        </div>
      </section>
  )

}

export default MovieDetails
