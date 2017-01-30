import React, { PropTypes } from 'react'

// import Captions from './Captions'
import Post from './Post'

const PostDetail = props => {
  const postId = Number(props.params.postId)
  // const captionId = Number(props.params.captionId)
  const post = props.posts.find(post => post.id === postId)
  // const caption = post.captions.find(caption => caption.id === captionId)
  const captions = post.captions.map(caption => {
    const onLikeClick = () => {
      props.likeCaption({captionId: caption.id, postId})
    }
    return (
      <div key={caption.id} className='card' style={{textAlign: 'center', maxWidth: '300px'}}>
        <div className='card-block'>
          <h6 className='card-subtitle mb-2 text-muted'>#{caption.id}</h6>
          <p className='card-text'>{caption.text}</p>
          <button onClick={onLikeClick} type='button' className='btn btn-outline-success card-link'>Likes {caption.likes}</button>
        </div>
      </div>
    )
  })
  return (
    <div>
      <Post post={post} numPosts={props.posts.length} />
      <div>
        {captions}
      </div>
    </div>
  )
}

// <Captions caption={caption} numCaptions={post.captions.length} postId={post.id} />

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
