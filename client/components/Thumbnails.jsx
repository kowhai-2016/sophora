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
    <div className='card-colums'>
      <div className='card p-3'>
        <div className='"card-img-top img-fluid"'>
          <PostButton />
          {thumbnails}
        </div>
      </div>
    </div>
  )
}
