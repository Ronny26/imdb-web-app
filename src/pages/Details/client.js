import axios from "axios";

const DB_BASE_API = "http://localhost:4000";
export const MOVIE_API = `${DB_BASE_API}/api/testMovies`;
export const REVIEWS_API = `${DB_BASE_API}/api/testReviews`;
export const USERS_API = `${DB_BASE_API}/api/users`;

export const getMovieById = async (id) => {
  try {
    const url = `${MOVIE_API}/${id}`;
    console.log(id);
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserReviews = async (movieId) => {
  try {
    const url = `${REVIEWS_API}/movie/${movieId}`;
    console.log(movieId);
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const findUserById = async (userId) => {
  try {
    const url = `${USERS_API}/${userId}`;
    console.log(userId);
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createReview = async (review) => {
  try {
    const response = await axios.post(`${REVIEWS_API}/review`, review);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
};
