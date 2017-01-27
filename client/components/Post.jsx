import React from 'react'

import PostImage from './PostImage'
import PostNav from './PostNav'

export default () => {
  return (
    <div>
      <div className='picture container-fluid'>
        <PostNav direction='left' />
        <PostImage />
        <PostNav direction='right' />
      </div>
    </div>
  )
}
