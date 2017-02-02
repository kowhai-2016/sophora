import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const CaptionAdd = ({ postId }) => {
  return (
    <div className='row' style={{width: '85%'}}>
      <div className='col-9' />
      <div className='col-3'>
        <Link to={`posts/${postId}/add`}>
          <button className='btn btn-info'>
            <span className='fa fa-plus' />
          </button>
        </Link>
      </div>
    </div>
  )
}

CaptionAdd.propTypes = {
  postId: PropTypes.number.isRequired
}

export default CaptionAdd
