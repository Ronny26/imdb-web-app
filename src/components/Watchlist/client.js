import axios from "axios";

const DB_BASE_API ="https://localhost:4000";
export const WATCHLIST_API = `${DB_BASE_API}/api/watchlist`;

export const createWatchlist = async(watchlist) => {
  const response = await axios.post( `${WATCHLIST_API}`, watchlist );
  return response.data;
};
