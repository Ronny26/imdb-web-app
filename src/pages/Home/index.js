import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import SearchPage from "../search/index";
import * as client from "./client";
import Movie from "../../components/Movie/movie";
import "./index.css"

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [rating, setRating] = useState(0);

  const getMovies = async () => {
    try {
      const response = await client.getTitles();
      setMovies(response);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
  const getUpcomingMovies = async () => {
    try {
      const response = await client.getUpcomingTitles();
      setUpcomingMovies(response);
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
    }
  }

  const getRating = async(id) => {
    try {
      const response = await client.getRating(id);
      return response
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
    }
  }

  useEffect(() => {
    getMovies();
    getUpcomingMovies();
  }, []);

  return (

    <div className="container">
    <h4>Upcoming Movies</h4>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {upcomingMovies.map(movie => (
        <Movie
          id={movie.id}
          title={movie.titleText.text}
          imageUrl={movie.primaryImage ? movie.primaryImage.url : 'https://www.dotyeti.com/wp-content/uploads/2023/01/barbie.webp'}
          rating={() => getRating(movie.id)}
        />
      ))}
    </div>
    <h4>Recommended for you</h4>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {movies.map(movie => (
        <Movie
          id={movie.id}
          title={movie.titleText.text}
          imageUrl={movie.primaryImage ? movie.primaryImage.url : 'https://www.dotyeti.com/wp-content/uploads/2023/01/barbie.webp'}
          rating={() => getRating(movie.id)}
        />
      ))}
    </div>
    </div>
  );
};

export default Home;
