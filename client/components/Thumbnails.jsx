import React from 'react'
import { Link } from 'react-router'

import PostButton from './PostButton'

export default props => {
  const thumbnails = props.posts.map((post, index) => {
    return (
      <div className='col-md-3' key={index}>
        <Link to={`/posts/${post.id}`}>
          <img className='img-fluid thumbnail' src={post.url} />
        </Link>
      </div>
    )
  })
  return (
    <div className='row thumbnail-gallery'>
      <PostButton />
      {thumbnails}
    </div>
  )
}
