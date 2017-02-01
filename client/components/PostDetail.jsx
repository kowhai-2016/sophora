import React, { PropTypes } from 'react'

import CaptionAdd from './CaptionAdd'
import Post from './Post'

const sortCaptions = captions => {
  const copy = captions.slice(0)
  copy.sort((a, b) => b.likes - a.likes)
  return copy
}

const PostDetail = props => {
  const postId = Number(props.params.postId)
  const post = props.posts.find(post => post.id === postId)
  const captions = sortCaptions(post.captions).map(caption => {
    const onLikeClick = () => {
      props.likeCaption({captionId: caption.id, postId})
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
            <span className='fa fa-thumbs-up' /> {caption.likes}
          </button>
        </div>
      </div>
    )
  })
  return (
    <div>
      <Post post={post} numPosts={props.posts.length} />
      <div>
        <CaptionAdd postId={props.postId} />
        {captions}
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
