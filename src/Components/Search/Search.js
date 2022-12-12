import './Search.css'


const SearchBar = ({ data, filterMovies }) => {
    const filterValue = (event) => {
        const searchWord = event.target.value
        const filteredList = data.filter(movie => movie.title.includes(searchWord))
        console.log(filteredList)
        return filterMovies(filteredList)
    }
    return (
        <div>
            <input className="search" onChange={filterValue} placeholder="Search for a movie..." ></input>
        </div>
    )
}


export default SearchBar