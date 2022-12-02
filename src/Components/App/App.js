import movieData from '../../sampleData.js'
import { Component } from 'react'
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer.js'
import MovieDetails from '../MovieDetails/MovieDetails.js'

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
    this.setState({movies: movieData})
  }

  handleClick = (id) => {
    console.log(id)
    this.setState({clicked: true, singleMovie: id})
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
