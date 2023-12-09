import axios from 'axios'

const BASE_API = 'https://moviesdatabase.p.rapidapi.com/titles'
export const TITLES_API = `${BASE_API}`

const headers = {
  headers: {
    'X-RapidAPI-Key': 'cb8a9b638dmsh374f7c8f8dc4c8cp161ff6jsn9845b2679a4e',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
}

export const getTitles = async genre => {
  try {
    const url = `${TITLES_API}?genre=${genre}`
    const response = await axios.get(url, headers)
    console.log(response)
    return response.data.results
  } catch (error) {
    console.error(error)
  }
}
