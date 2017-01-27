import React, { PropTypes } from 'react'

let nextId = props.params.captionId

const CaptionNav = ({ direction }) => {
  if ({direction} === 'up') {
    nextId++
  } else {
    nextId--
  }
  return (
    <Link role='button' to='/posts/{props.params.postId}/{nextId}' className='btn'>
      <span className={`fa fa-arrow-${direction}`} />
    </Link>
  )
}

CaptionNav.propTypes = {
  direction: PropTypes.string.isRequired
}

export default CaptionNav
