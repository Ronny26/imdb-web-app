import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import WatchlistButton from "../Watchlist";

const Movie = ({ id, title, imageUrl, rating }) => {
  let navigate = useNavigate();
  console.log(rating);
  return (
    <div className="im-movie-tile-style">
      <div>
        <img className="im-movie-poster mb-2" src={imageUrl} alt={title} />
      </div>
      <div>
        <div className="im-movie-title-section">
          <div className="im-movie-title">{title}</div>
          <WatchlistButton />
        </div>

        <div className="im-movie-title">
          <FaStar className="im-star" />
          {rating}
        </div>
      </div>
    </div>
  );
};

export default Movie;
