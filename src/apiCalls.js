const validateResponse = (response) => {
  if(!response.ok) {
    throw new Error(
      `Status: ${response.status}`
    )
  }
  return response.json();
}

export const fetchData = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => validateResponse(response))

}

export const fetchSingleData = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => validateResponse(response))
}
