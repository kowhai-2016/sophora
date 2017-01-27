import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const PostNav = ({ direction, enabled, postId }) => {
  const Button = (
    <button className={`btn ${enabled ? '' : 'disabled'}`}>
      <span className={`fa fa-arrow-${direction}`} aria-hidden='true' />
    </button>
  )
  if (enabled) {
    const newPostId = postId + (direction === 'left' ? -1 : 1)
    return (
      <Link to={`/posts/${newPostId}`}>
        <Button />
      </Link>
    )
  } else {
    return Button
  }
}

PostNav.propTypes = {
  direction: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  postId: PropTypes.number.isRequired
}

export default PostNav
