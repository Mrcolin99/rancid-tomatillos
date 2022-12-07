import { Component } from 'react'
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer.js'
import MovieDetails from '../MovieDetails/MovieDetails.js'
import { fetchData, fetchSingleData } from '../../apiCalls.js'
import { Route, Link, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      singleMovie: {},
      errorMessage: ''
      }
  }

  componentDidMount = () => {
    fetchData()
    .then(data => this.setState({movies: data.movies}))
    .catch(err => this.setState({errorMessage: "ERROR, Please try again."}))
    }

  fetchSingleMovie = (id) => {
    fetchSingleData(id)
    .then(data => this.setState({singleMovie: data.movie}))
    .catch(err => this.setState({errorMessage: "ERROR, Please try again."}))
    }

  render() {
    return(
      <main className="App">
        <nav>
          <Link to="/"><h1 className="title">Y U C K Y <br /> Y A M S</h1></Link>
        </nav>
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <div className="movieContainer">
                <MovieContainer
                handleClick={this.fetchSingleMovie}
                movies={this.state.movies}/>
              </div> )}
          />
          <Route
            path="/:id"
            render={({ match }) => (
            <div className="movieDetailsContainer">
             <MovieDetails
              fetchSingleMovie={this.fetchSingleMovie}
              id={match.params.id}
              singleMovie={this.state.singleMovie}/>
            </div>)}
          />
        </Switch>
      </main>
    )
  }
}

export default App;
