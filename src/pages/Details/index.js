import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import * as client from './client'
import './Detail.css'
import PopularMovies from '../../components/Movie/popular'

const MovieInfoComponent = () => {
  const { movieId } = useParams()
  const [movieInfo, setMovieInfo] = useState('')

  const getMovies = async () => {
    try {
      const response = await client.getTitles(movieId)
      setMovieInfo(response)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  useEffect(() => {
    getMovies(movieId)
  }, [])

  if (!movieInfo) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div className='movie-detail'>
        <div className='movie-detail-left'>
          <h1 className='movie-title'>{movieInfo.originalTitleText.text}</h1>
          <div className='movie-year-genre'>
            <span className='movie-year'>{movieInfo.titleType.text}</span>
            <span className='movie-year'>{movieInfo.releaseYear.year}</span>
            <div className='movie-genres'>{}</div>
          </div>
          <div className='movie-rating'>{}</div>
          <p className='movie-description'>{movieInfo.description}</p>
          <div className='movie-tags'>{}</div>
          <div className='movie-cast'>{}</div>
          <div className='movie-actions'>
            <button className='button-trailer'>Watch Trailer</button>
          </div>
        </div>
        <div className='movie-detail-right'>
          <img
            src={
              movieInfo.primaryImage
                ? movieInfo.primaryImage.url
                : 'https://www.dotyeti.com/wp-content/uploads/2023/01/barbie.webp'
            }
            alt='Movie Poster'
            className='movie-poster'
          />
        </div>
      </div>
      <h2 className='title'>Most Popular Movies</h2>
      <PopularMovies />
    </div>
  )
}

export default MovieInfoComponent
