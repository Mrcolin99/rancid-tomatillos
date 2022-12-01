import movieData from '../../sampleData.js'
import { Component } from 'react'
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      clicked: false
    }
  }

  componentDidMount = () => {
    this.setState({movies: movieData})
  }

  

  render() {
    return(
      <main className="App">
        <h1>Yucky Yams</h1>
        <MovieContainer movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
