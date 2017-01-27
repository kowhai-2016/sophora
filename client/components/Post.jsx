import React, { PropTypes } from 'react'

import PostImage from './PostImage'
import PostNav from './PostNav'

const Post = props => {
  const post = props.post
  return (
    <div>
      <div className='picture container-fluid'>
        <PostNav direction='left' enabled={props.post.id > 1} postId={post.id} />
        <PostImage url={post.url} />
        <PostNav direction='right' enabled={props.post.id < props.numPosts - 1} postId={post.id} />
      </div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  numPosts: PropTypes.number.isRequired
}

export default Post
