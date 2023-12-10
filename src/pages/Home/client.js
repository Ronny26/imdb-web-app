import axios from "axios";

const BASE_API = "https://moviesdatabase.p.rapidapi.com";
export const TITLES_API = `${BASE_API}/titles`;
export const UPCOMING_API = `${BASE_API}/titles/x/upcoming`;

const DB_BASE_API = "https://localhost:4000";
export const WATCHLIST_API = `${DB_BASE_API}/api/watchlist`;

const headers = {
  headers: {
    "X-RapidAPI-Key": "23cf5a5c76mshc3823944dba0eb5p158854jsn0cad955f4082",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

export const getTitles = async () => {
  const response = await axios.get(`${TITLES_API}`, headers);
  return response.data.results;
};

export const getUpcomingTitles = async () => {
  const response = await axios.get(`${UPCOMING_API}`, headers);
  return response.data.results;
};

export const getRating = async (id) => {
  const response = await axios.get(`${TITLES_API}/${id}/ratings`, headers);
  return response.data.results.averageRating;
};

export const createWatchlist = async (watchlist) => {
  const response = await axios.post(`${WATCHLIST_API}`, watchlist);
  return response.data;
};
