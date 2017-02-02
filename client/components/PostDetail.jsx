import React, { PropTypes } from 'react'

import CaptionAdd from './CaptionAdd'
import Post from './Post'

const sortCaptions = captions => {
  const copy = captions.slice(0)
  copy.sort((a, b) => b.like - a.like)
  return copy
}

const getCaptions = (post, postId, likeCaption) => {
  if (!post) return null
  const captions = sortCaptions(post.captions).map(caption => {
    const onLikeClick = () => {
      likeCaption(postId, caption.id)
    }
    return (
      <div key={caption.id} className='card' style={{margin: '10px auto', float: 'none', maxWidth: '400px'}}>
        <div className='card-block'>
          <h6 className='card-subtitle mb-2 text-muted'>#{caption.id}</h6>
          <p className='card-text'>{caption.text}</p>
        </div>
        <div className='card-footer'>
          <button
            style={{cursor: 'pointer'}}
            onClick={onLikeClick}
            type='button'
            className='btn btn-outline-success card-link'>
            <span className='fa fa-thumbs-up' /> {caption.like}
          </button>
        </div>
      </div>
    )
  })
  return captions
}

const PostDetail = props => {
  const postId = Number(props.params.postId)
  const post = props.posts.find(post => post.id === postId)
  if (!post) return null
  return (
    <div>
      <Post post={post} numPosts={props.posts.length} />
      <div>
        <CaptionAdd postId={postId} />
        {getCaptions(post, postId, props.likeCaption)}
      </div>
    </div>
  )
}

PostDetail.propTypes = {
  likeCaption: PropTypes.func.isRequired,
  params: PropTypes.shape({
    captionId: PropTypes.string,
    postId: PropTypes.string.isRequired
  }).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      captions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
      })).isRequired
    })
  ).isRequired
}

export default PostDetail
