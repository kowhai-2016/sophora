import React, { PropTypes } from 'react'

const PostImage = props => {
  return (
    <img
      src={props.url}
      className='imagedetail'
      alt='Image' />
  )
}

PostImage.propTypes = {
  url: PropTypes.string.isRequired
}

export default PostImage
