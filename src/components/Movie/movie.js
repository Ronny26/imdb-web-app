import React from 'react';

const Movie = ({ title, releaseYear, imageUrl }) => {
  return (
    <div className="movie">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      {releaseYear && <p>Release Year: {releaseYear.year}</p>}
    </div>
  );
}

export default Movie;