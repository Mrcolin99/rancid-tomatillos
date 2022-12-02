import { Component } from 'react'
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer.js'
import MovieDetails from '../MovieDetails/MovieDetails.js'
import fetchData from '../../apiCalls.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      singleMovie: {},
      clicked: false
    }
  }

  componentDidMount = () => {
    fetchData()
    .then(data => this.setState({movies: data.movies}))
    }

  handleClick = (movie) => {
    console.log(movie.id)
    this.setState({clicked: true, singleMovie: movie})
    console.log('clicked', this.state.singleMovie)
  }

  goHome = () => {
    this.setState({clicked: false, singleMovie: {}})
  }

  render() {
    return(
      <main className="App">
        <h1 className="title" onClick={() => this.goHome()}>Yucky Yams</h1>
        {this.state.clicked === false ? <MovieContainer movies={this.state.movies} handleClick={this.handleClick} /> :
        <MovieDetails singleMovie={this.state.singleMovie}/>
      }

      </main>
    )
  }
}

export default App;
