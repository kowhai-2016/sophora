import React, { PropTypes } from 'react'

import CaptionAdd from './CaptionAdd'
import CaptionLikes from './CaptionLikes'
import CaptionNav from './CaptionNav'

const Captions = props => {
  return (
    <div className='captionbox container'>
      <div className='pagedetail-nav'>
        <CaptionNav captionId={props.caption.id} direction='up' enabled={props.caption.id > 1} postId={props.postId} />
        <CaptionNav captionId={props.caption.id} direction='down' enabled={props.caption.id < props.numCaptions} postId={props.postId} />
      </div>
      <div className='displaycaption'>
        <h3>{props.caption.text}</h3>
      </div>
      <div className='row'>
        <CaptionLikes likes={props.caption.likes} />
        <CaptionAdd postId={props.postId} />
      </div>
    </div>
  )
}

Captions.propTypes = {
  caption: PropTypes.shape({
    id: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  numCaptions: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired
}

export default Captions
