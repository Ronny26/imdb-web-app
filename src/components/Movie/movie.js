import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Movie = ({ id, title, imageUrl, rating }) => {
  let navigate = useNavigate();
  console.log(rating);
  return (
    <div className="card im-movie-tile-style">
      <div>
        <img className="im-movie-poster mb-2" src={imageUrl} alt={title} />
      </div>
      <div className="d-flex">
        <div className="d-flex  flex-column">
          <div className="im-movie-title">{title}</div>
          <CiBookmark />
        </div>
        <div className="d-flex  flex-column ">
          <FaStar />
          <div className="im-movie-title">{rating}</div>
        </div>
      </div>
      {/* <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => {
          navigate(`/${id}`);
        }}
      >
        Add to watchlist
      </button> */}
    </div>
  );
};

export default Movie;
