import React, { PropTypes } from 'react'

const PostNav = ({ direction }) => {
  return (
    <button className='btn'>
      <span className={`fa fa-arrow-${direction}`} aria-hidden='true' />
    </button>
  )
}

PostNav.propTypes = {
  direction: PropTypes.string.isRequired
}

export default PostNav
