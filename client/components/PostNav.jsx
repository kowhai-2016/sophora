import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const PostNav = ({ direction, enabled, postId }) => {
  const NavButton = (
    <button className={`btn ${enabled ? '' : 'disabled'}`}>
      <span className={`fa fa-arrow-${direction}`} aria-hidden='true' />
    </button>
  )
  // return Button
  if (enabled) {
    const newPostId = postId + (direction === 'left' ? -1 : 1)
    // return NavButton
    return (
      <Link to={`/posts/${newPostId}`}>
        {NavButton}
      </Link>
    )
  }
  return NavButton
}

PostNav.propTypes = {
  direction: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  postId: PropTypes.number.isRequired
}

export default PostNav
