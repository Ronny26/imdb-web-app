import axios from "axios";

const DB_BASE_API ="https://localhost:4000";
export const GET_WATCHLIST_API = `${DB_BASE_API}/api/watchlist`;

export const getWatchlist = async (user) => {
  try {
    const response = await axios.get(`${GET_WATCHLIST_API}/${user._id}`);
    console.log(response.data)
    return response.data; 
  } catch (error) {
    console.error("Error getting watchlist:", error);
    throw error;
  }
};

