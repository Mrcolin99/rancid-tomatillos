import { Component } from 'react'
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer.js'
import MovieDetails from '../MovieDetails/MovieDetails.js'
import ErrorPage from '../ErrorPage/ErrorPage.js'
import { fetchData, fetchSingleData, fetchSingleDataMovie } from '../../apiCalls.js'
import { Route, Link, Switch } from 'react-router-dom';
import potato from '../../Assets/potato2.png'
import PropTypes from 'prop-types'
import SearchBar from '../Search/Search';


class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      movies: [],
      singleMovie: {},
      errorMessage: '',
      movieTrailer: null
    }
  }

  componentDidMount = () => {
    fetchData()
      .then(data => this.setState({ allMovies: data.movies, movies: data.movies}))
      .catch(err => this.setState({ errorMessage: err.message }))
  }

  fetchSingleMovie = (id) => {
    fetchSingleData(id)
      .then(data => this.setState({ singleMovie: data.movie }))
      .catch(err => this.setState({ errorMessage: err.message }))
  }

  fetchSingleMovieTrailer = (id) => {
    fetchSingleDataMovie(id)
      .then(data => this.setState({ movieTrailer: data }))
      .catch(err => this.setState({ errorMessage: err.message }))
  }

  filterMovieResults = (data) => {
    this.setState({movies: data})
  }


  render() {
    return (
      <main className="App">
        <nav className="navBar">
          <Link to="/" className="homeLink">Y U C K Y <br /> Y A M S</Link>
          <img className="potatoImg" src={potato} alt="Potato Logo" />
          <SearchBar className="searchBar" data={this.state.allMovies} filterMovies={this.filterMovieResults} />
        </nav>
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <div className="movieContainer">
                {!this.state.errorMessage ?
                  <MovieContainer movies={this.state.movies} />
                  : <ErrorPage />}
              </div>
            )}
          />
          <Route
            path="/:id"
            render={({ match }) => (
              <div className="detailsContainer">
                {!this.state.errorMessage && this.state.singleMovie !== {} ?
                  <MovieDetails
                    singleMovie={this.state.singleMovie}
                    title={this.state.singleMovie.title}
                    backdropPath={this.state.singleMovie.backdrop_path}
                    posterPath={this.state.singleMovie.poster_path}
                    genres={this.state.singleMovie.genres}
                    overview={this.state.singleMovie.overview}
                    averageRating={this.state.singleMovie.averageRating}
                    releaseDate={this.state.singleMovie.release_date}
                    revenue={this.state.singleMovie.revenue}
                    runtime={this.state.singleMovie.runtime}
                    fetchSingleMovie={this.fetchSingleMovie}
                    fetchSingleMovieTrailer={this.fetchSingleMovieTrailer}
                    movieTrailer={this.state.movieTrailer}
                    id={match.params.id} />
                  : <ErrorPage />}
              </div>
            )}
          />
        </Switch>
      </main>
    )
  }
}

export default App;
