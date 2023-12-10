import React, { useEffect, useState } from "react";
import * as client from "./client";
import Movie from "../../components/Movie/movie";
import { useAuth } from "../../components/users/authenticateUser";


const Watchlist = () => {
    const [watchlistedMovieIds, setWatchlistedMovieIds] = useState([]);
    const [watchlistedMovies, setWatchlistedMovies] = useState([]);
    const { currentUser } = useAuth();

    const getWatchlistedMovies = async () => {
        try {
          const response = await client.getWatchlist(currentUser);
          console.log(response.data);
          setWatchlistedMovieIds(response.data);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };
      

    //   const getWatchlistByID = async () => {
    //     try {
    //       const response = await client.getWatchlist();
    //       setWatchlistedMovieIds(response);
    //     } catch (error) {
    //       console.error("Error fetching movies:", error);
    //     }
    //   };
      useEffect(() => {
        getWatchlistedMovies();
      }, []);

  return (
    <div className="container">
      {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
        {watchlistedMovies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.titleText.text}
            imageUrl={
              movie.primaryImage
                ? movie.primaryImage.url
                : "https://www.dotyeti.com/wp-content/uploads/2023/01/barbie.webp"
            }
            rating={ratings[movie.id] || 0}
            userId={currentUser ? currentUser._id : null}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Watchlist;
