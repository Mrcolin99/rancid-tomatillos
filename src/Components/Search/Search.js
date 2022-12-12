import './Search.css'
import PropTypes from 'prop-types'


const SearchBar = ({ data, filterMovies }) => {
    const filterValue = (event) => {
        const searchWord = event.target.value
        const filteredList = data.filter(movie => movie.title.includes(searchWord))
        let error
        {filteredList === [] ? error = true : error = false}
        console.log(filteredList, error)
        return filterMovies(filteredList, error)
    }

    return (
        <div>
            <input className="search" onChange={filterValue} placeholder="Search for a movie..." ></input>
        </div>
    )
}

export default SearchBar

SearchBar.propTypes = {
    data: PropTypes.array.isRequired,
    filterMovies: PropTypes.func.isRequired
}
