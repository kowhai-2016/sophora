import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const CaptionAdd = ({ postId }) => {
  return (
    <Link to={`posts/${postId}/add`}>
      <button className='btn'>
        <span className='fa fa-plus' />
      </button>
    </Link>
  )
}

CaptionAdd.propTypes = {
  postId: PropTypes.number.isRequired
}

export default CaptionAdd
