import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import "./index.css";
import * as client from "./client";

const WatchlistButton = ({movieId, userId}) => {
  const [clicked, setClicked] = useState(false);

  const addToWatchlist = () => {
    if (userId == null) {
      console.log("Please log in");
    } else {
        setClicked(!clicked)
        client.createWatchlist({userId: userId, movieId: movieId})
    }
  };

  return (
    <CiBookmark
      className={clicked ? "im-watchlist-filled" : "im-watchlist-transparent"}
      onClick={() => addToWatchlist()}
    />
  );
};

export default WatchlistButton;
