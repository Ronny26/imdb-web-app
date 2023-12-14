import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './UserProfile.css'
import * as client from './client'

import { FaUserCog } from 'react-icons/fa'

const UserProfile = () => {
  const [userReviews, setUserReviews] = useState([])
  const [user, setUser] = useState([])
  const { userId } = useParams()
  const [isFollowing, setIsFollowing] = useState(false)

  const getUserReviews = async userId => {
    try {
      const response = await client.findReviewsByUserId(userId)
      console.log(response.data)
      setUserReviews(response)
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }
  const checkIfUserIsFollowed = async () => {
    try {
      const isFollowed = await client.checkFollowStatus(userId, user.username)
      setIsFollowing(isFollowed)
    } catch (error) {
      console.error('Error checking follow status:', error)
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
  const handleFollowClick = async () => {
    try {
      await client.followUnfollowUser(userId, user.username)
      setIsFollowing(!isFollowing)
    } catch (error) {
      console.error('Error following/unfollowing user:', error)
    }
  }
  useEffect(() => {
    getUser(userId)
    getUserReviews(userId)
    checkIfUserIsFollowed()
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
        <button className='follow-btn' onClick={handleFollowClick}>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
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
