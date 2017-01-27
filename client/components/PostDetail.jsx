import React, { PropTypes } from 'react'

import Captions from './Captions'
import Post from './Post'

const PostDetail = props => {
  const postId = props.location.params.postId
  const captionId = props.location.params.captionId
  const post = props.posts.find(post => post.id === postId)
  const caption = post.captions.find(caption => caption.id === captionId)
  return (
    <div>
      <Post post={post} numPosts={props.posts.length} />
      <Captions caption={caption} numCaptions={post.captions.length} postId={post.id} />
    </div>
  )
}

PostDetail.propTypes = {
  location: PropTypes.shape({
    params: PropTypes.shape({
      captionId: PropTypes.number.isRequired,
      postId: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      captions: PropTypes.arrayOf({
        id: PropTypes.number.isRequired
      }).isRequired
    })
  ).isRequired
}

export default PostDetail
