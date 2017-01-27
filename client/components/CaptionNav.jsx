import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const CaptionNav = ({ captionId, direction, enabled, postId }) => {
  const Button = (
    <button className={`btn ${enabled ? '' : 'disabled'}`}>
      <span className={`fa fa-arrow-${direction}`} />
    </button>
  )
  if (enabled) {
    const newCaptionId = captionId + (direction === 'up' ? -1 : 1)
    return (
      <Link to={`/posts/${postId}/${newCaptionId}`}>
        <Button />
      </Link>
    )
  } else {
    return Button
  }
}

CaptionNav.propTypes = {
  captionId: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  postId: PropTypes.number.isRequired
}

export default CaptionNav
