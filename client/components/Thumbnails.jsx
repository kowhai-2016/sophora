import React from 'react'
import { Link } from 'react-router'

import PostButton from './PostButton'

export default props => {
  const thumbnails = props.posts.map((post, index) => {
    return (
      <div className='card' key={index} style={{textAlign: 'center'}}>
        <Link to={`/posts/${post.id}`}>
          <img className='card-img-top img-fluid' src={post.url} />
        </Link>
      </div>
    )
  })
  return (
    <div className='container'>
      <PostButton />
      <div className='card-columns'>
        {thumbnails}
      </div>
    </div>
  )
}
