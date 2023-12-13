import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './UserProfile.css'
import * as client from './client'

import { FaUserCog } from 'react-icons/fa'

const UserProfile = () => {
  const [userReviews, setUserReviews] = useState([])
  const [user, setUser] = useState([])
  const { userId } = useParams()

  const getUserReviews = async userId => {
    try {
      const response = await client.findReviewsByUserId(userId)
      setUserReviews(response)
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }

  const getUser = async userId => {
    try {
      const response = await client.findUserById(userId)
      setUser(response)
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }

  useEffect(() => {
    getUser(userId)
    getUserReviews(userId)
  }, [])

  return (
    <div className='user-profile'>
      <div className='user-details'>
        <div className='user-image'>
          <FaUserCog className='user-icon' />
        </div>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <span className='user-role'>{user.role}</span>
        <p className='user-email'>
          <i className='fas fa-envelope'></i> {user.email}
        </p>
      </div>
      <div className='user-reviews'>
        {userReviews.map((review, index) => (
          <div key={index} className='review'>
            <div className='review-rating'>{review.rating}</div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserProfile
