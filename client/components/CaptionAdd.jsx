import React from 'react'

export default () => {
  return (
    <Link role='button' to='/posts/{props.params.postId}/add' className='btn'>
      <span className='fa fa-plus' />
    </Link>
  )
}
