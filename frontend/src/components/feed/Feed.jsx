import React from 'react'
import './feed.css'
import Sharefeed from '../share-feed/Sharefeed'
import Post from '../post/Post'

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__wrapper'>
        <Sharefeed />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Feed