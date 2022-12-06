export const fetchData = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())

}

export const fetchSingleData = (id) => {
    console.log(id.id)
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id.id}`)
    .then(response => response.json())
}

