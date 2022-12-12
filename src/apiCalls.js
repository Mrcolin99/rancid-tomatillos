const validateResponse = (response) => {
  if(!response.ok) {
    throw new Error(
      `Status: ${response.status}`
    )
  }
  return response.json();
}

export const fetchData = async () => {
    let response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    let data = await validateResponse(response)
    return data
}

export const fetchSingleData = async (id) => {
    let response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    let data = await validateResponse(response)
    return data
}

export const fetchSingleDataMovie = async (id) => {
    let response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    let data = await validateResponse(response)
    return data
}
