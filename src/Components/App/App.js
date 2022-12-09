import { Component } from 'react'
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer.js'
import MovieDetails from '../MovieDetails/MovieDetails.js'
import ErrorPage from '../ErrorPage/ErrorPage.js'
import { fetchData, fetchSingleData, fetchSingleDataMovie } from '../../apiCalls.js'
import { Route, Link, Switch } from 'react-router-dom';
import potato from '../../Assets/potato7.png'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      singleMovie: null,
      errorMessage: '',
      movieTrailer: null
      }
  }

  componentDidMount = () => {
    fetchData()
    .then(data => this.setState({movies: data.movies}))
    .catch(err => this.setState({errorMessage: err.message}))
  }

  fetchSingleMovie = (id) => {
    fetchSingleData(id)
    .then(data => this.setState({singleMovie: data.movie}))
    .catch(err => this.setState({errorMessage: err.message}))
  }

  fetchSingleMovieTrailer = (id) => {
    fetchSingleDataMovie(id)
    .then(data => this.setState({movieTrailer: data}))
    .catch(err => this.setState({errorMessage: err.message}))
    }


  render() {
    return(
      <main className="App">
        <nav className="navBar">
          <Link to="/" className="homeLink">Y U C K Y <br /> Y A M S</Link>
          <img className="potatoImg" src={potato} alt="Potato Logo" />
        </nav>
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <div className="movieContainer">
              {!this.state.errorMessage ?
                <MovieContainer movies={this.state.movies}/>
                : <ErrorPage />}
              </div>
              )}
          />
          <Route
            path="/:id"
            render={({ match }) => (
            <div className="detailsContainer">
            {!this.state.errorMessage ?
            <MovieDetails
              singleMovie={this.state.singleMovie}
              fetchSingleMovie={this.fetchSingleMovie}
              fetchSingleMovieTrailer={this.fetchSingleMovieTrailer}
              movieTrailer={this.state.movieTrailer}
              id={match.params.id}/>
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
