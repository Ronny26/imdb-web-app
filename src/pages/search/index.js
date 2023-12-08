import React, { useEffect, useState } from 'react'
import * as client from './client' // Make sure this path is correct
import './SearchPage.css' // Your CSS file to style the components

const SearchPage = () => {
  const [movies, setMovies] = useState([])
  const [genre, setGenre] = useState('Comedy') // default genre

  const getMovies = async selectedGenre => {
    try {
      const response = await client.getTitles(selectedGenre)
      setMovies(response)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  useEffect(() => {
    getMovies(genre)
  }, [genre])

  const handleGenreChange = newGenre => {
    setGenre(newGenre)
    getMovies(newGenre)
  }

  return (
    <div className='search-page'>
      <div className='genre-buttons'>
        {[
          'Action',
          'Drama',
          'Comedy',
          'Crime',
          'Adventure',
          'Fantasy',
          'Thriller',
          'Animation',
          'Sci-Fi',
          'Sport'
        ].map(g => (
          <button
            key={g}
            onClick={() => handleGenreChange(g)}
            className={genre === g ? 'active' : ''}
          >
            {g}
          </button>
        ))}
      </div>
      <h2 className='title'>Most Popular Genre</h2>
      <div className='movie-container'>
        {movies.map(movie => (
          <div className='movie-card' key={movie.id}>
            <img
              src={movie.primaryImage ? movie.primaryImage.url : ''}
              alt={movie.titleText.text}
              className='movie-image'
            />
            <div className='movie-info'>
              <h3>{movie.titleText.text}</h3>
              <p>
                {movie.releaseYear && (
                  <p>Release Year: {movie.releaseYear.year}</p>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchPage
