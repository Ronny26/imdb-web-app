import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import * as client from './client'
import './Detail.css'
import useAuth from '../../components/users/authenticateUser'
import PopularMovies from '../../components/Movie/popular'

const MovieDetails = () => {
  const [userReviews, setUserReviews] = useState([])
  const [criticReviews, setCriticReviews] = useState([])
  const [showUserReviews, setShowUserReviews] = useState(false)
  const [showCriticReviews, setShowCriticReviews] = useState(false)
  const { movieId } = useParams()

  const [movieData, setMovieData] = useState({
    title: 'The Color Purple',
    actors: ['Alice Johnson', 'David Thompson'],
    description: 'The Color Purple is a heartwarming drama...',
    rating: 6.8,
    primary_image: {
      url: 'https://m.media-amazon.com/images/M/MV5BYjBkNGE0NGYtYmU5Ny00NjRiLTk5MmYtMWU4NzYxMDE4YWY4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg'
    }
  })

  const getMovies = async () => {
    try {
      const response = await client.getMovieById(movieId)
      console.log(response)
      setMovieData(response)
    } catch (error) {
      console.error('Error fetching movie:', error)
    }
  }

  const getUserReviews = async movieId => {
    try {
      const response = await client.getUserReviews(movieId)
      console.log(response)
      setUserReviews(response)
    } catch (error) {
      console.error('Error fetching movie:', error)
    }
  }

  useEffect(() => {
    getMovies(movieId)
    getUserReviews(movieId)
  }, [])

  const userReviewsData = [
    { username: 'User1', rating: 8, feedback: 'Great movie!' },
    { username: 'User2', rating: 7, feedback: 'Enjoyed it, but...' }
  ]

  const criticReviewsData = [
    { criticName: 'Critic1', rating: 9, feedback: 'A masterpiece!' },
    { criticName: 'Critic2', rating: 8, feedback: 'Solid performances...' }
  ]

  const handleShowUserReviews = () => {
    setShowUserReviews(true)
    setShowCriticReviews(false)
  }

  const handleShowCriticReviews = () => {
    setShowCriticReviews(true)
    setShowUserReviews(false)
  }

  if (!movieData) {
    return <div>Loading...</div>
  }
  // Uncomment and set up state based on your needs
  // const [userRating, setUserRating] = useState(0);
  // const [userFeedback, setUserFeedback] = useState('');

  // const handleUserSubmit = (e) => {
  //   e.preventDefault();
  //   const newUserReview = {
  //     username: "New User",
  //     rating: userRating,
  //     feedback: userFeedback,
  //   };
  //   setUserReviews([...userReviews, newUserReview]);
  //   // You may want to send this data to a server or update it in your state management
  //   setUserRating(0);
  //   setUserFeedback('');
  // };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-4'>
          <img
            src={movieData.primary_image.url}
            alt={movieData.title}
            className='im-poster'
          />
        </div>
        <div className='col-md-8'>
          <h1>{movieData.title}</h1>
          <p>Actors: {movieData.actors.join(', ')}</p>
          <p>Description: {movieData.description}</p>
          <p>Rating: {movieData.rating}</p>
          <button className='btn btn-primary' onClick={handleShowUserReviews}>
            Show User Reviews
          </button>
          <button
            className='btn btn-primary im-button'
            onClick={handleShowCriticReviews}
          >
            Show Critic Reviews
          </button>
          <h3>Add Your Review</h3>
          <div className='col-xs-3'>
            <label htmlFor='userRating'>Rating (out of 10):</label>
            <input
              type='number'
              className='form-control'
              id='userRating'
              min='0'
              max='10'
              // value={userRating}
              // onChange={(e) => setUserRating(e.target.value)}
            />
          </div>
          <div className='col-xs-6'>
            <label htmlFor='userFeedback'>Feedback:</label>
            <textarea
              className='form-control'
              id='userFeedback'
              rows='3'
              // value={userFeedback}
              // onChange={(e) => setUserFeedback(e.target.value)}
            ></textarea>
          </div>
          <div className='mt-3'>
            {/* Uncomment the onSubmit event handler when ready to implement */}
            <button type='submit' className='btn btn-primary'>
              Submit Review
            </button>
          </div>
        </div>
      </div>

      {showUserReviews && (
        <div className='mt-4'>
          <h2>User Reviews</h2>
          <ul className='list-group'>
            {userReviews.map((review, index) => (
              <li key={index} className='list-group-item'>
                <p>{review.username}</p>
                <p>Rating: {review.rating}</p>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showCriticReviews && (
        <div className='mt-4'>
          <h2>Critic Reviews</h2>
          <ul className='list-group'>
            {criticReviewsData.map((review, index) => (
              <li key={index} className='list-group-item'>
                <p>{review.criticName}</p>
                <p>Rating: {review.rating}</p>
                <p>{review.feedback}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MovieDetails
