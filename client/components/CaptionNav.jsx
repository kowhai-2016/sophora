import React, { PropTypes } from 'react'

const CaptionNav = ({ direction }) => {
  return (
    <button className='btn'>
      <span className={`fa fa-arrow-${direction}`} />
    </button>
  )
}

CaptionNav.propTypes = {
  direction: PropTypes.string.isRequired
}

export default CaptionNav
