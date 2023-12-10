import axios from "axios";

const DB_BASE_API ="https://localhost:4000";
export const WATCHLIST_API = `${DB_BASE_API}/api/watchlist`;

export const createWatchlist = async (watchlist) => {
  try {
    const response = await axios.post(`${WATCHLIST_API}`, watchlist);
    console.log(response.data)
    return response.data; // Return the created watchlist entry from the response
  } catch (error) {
    console.error("Error creating watchlist:", error);
    throw error;
  }
};

