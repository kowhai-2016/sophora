import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Captions from './Captions'
import Post from './Post'

const PostDetail = props => {
  const postId = Number(props.params.postId)
  const captionId = Number(props.params.captionId)
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
  params: PropTypes.shape({
    captionId: PropTypes.string,
    postId: PropTypes.string.isRequired
  }).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      captions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired
        })
      ).isRequired
    })
  ).isRequired
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostDetail)
