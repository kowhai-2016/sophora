import React from 'react'

import CaptionAdd from './CaptionAdd'
import CaptionLikes from './CaptionLikes'
import CaptionNav from './CaptionNav'

export default () => {
  return (
    <div className='captionbox container'>
      <div className='pagedetail-nav'>
        <CaptionNav direction='up' />
        <CaptionNav direction='down' />
      </div>
      <div className='displaycaption'>
        <h3>Play with me!</h3>
      </div>
      <div className='row'>
        <CaptionLikes />
        <CaptionAdd />
      </div>
    </div>
  )
}
