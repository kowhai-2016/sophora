import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className='row' style={{width: '100%'}}>
        <Link className='btn btn-primary' to='posts/add' role='button'>+</Link>
      </div>
    )
  }
})
