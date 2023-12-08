import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import SearchPage from "../search/index";
import * as client from "./client";
import Movie from "../../components/Movie/movie";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await client.getTitles();
      setMovies(response);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }


  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movie-container">
   <button><SearchPage/></button>
      {movies.map(movie => (
        <Movie
          key={movie.id}
          title={movie.titleText.text}
          releaseYear={movie.releaseYear}
          imageUrl={movie.primaryImage ? movie.primaryImage.url : ''}
        />
      ))}
    </div>
  );
};

export default Home;
