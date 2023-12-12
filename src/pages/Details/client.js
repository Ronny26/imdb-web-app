import axios from 'axios'

const DB_BASE_API = "http://localhost:4000";
export const MOVIE_API = `${DB_BASE_API}/api/testMovies`;
export const REVIEWS_API = `${DB_BASE_API}/api/testReviews`;

export const getMovieById = async id => {
  try {
    const url = `${MOVIE_API}/${id}`
    console.log(id)
    const response = await axios.get(url)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getUserReviews = async (movieId) => {
  try {
    const url = `${REVIEWS_API}/movie/${movieId}`
    console.log(movieId)
    const response = await axios.get(url)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
