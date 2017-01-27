import React, { PropTypes } from 'react'

let nextId = props.params.postId

const PostNav = ({ direction }) => {
  if ({direction} === 'right') {
    nextId++
  } else {
    nextId--
  }
  return (
    <Link role='button' to='/posts/{nextId}' className='btn'>
      <span className={`fa fa-arrow-${direction}`} aria-hidden='true' />
    </Link>
  )
}

PostNav.propTypes = {
  direction: PropTypes.string.isRequired
}

export default PostNav
