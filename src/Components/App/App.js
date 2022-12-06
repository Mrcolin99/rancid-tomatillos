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
    // .then(data => console.log(data.movie))
    .then(data => this.setState({singleMovie: data.movie}))
    }

  render() {
    return(
      <main className="App">
        <nav>
          <Link to="/"><h1 className="title">Y U C K Y <br /> Y A M S</h1></Link>
        </nav>
        <Switch>
          <Route exact path="/" render={() => <MovieContainer handleClick={this.fetchSingleMovie} movies={this.state.movies}/>}/>
          <Route path="/:id" render={({ match }) => <MovieDetails fetchSingleMovie={this.fetchSingleMovie} id={match.params.id} singleMovie={this.state.singleMovie}/>}/>
        </Switch>
      </main>
    )
  }
}

export default App;
