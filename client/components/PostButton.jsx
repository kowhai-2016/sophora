import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className='row'>
        <div className='col-md-2'>
          <Link className='btn btn-primary' to='posts/add' role='button'>+</Link>
        </div>
      </div>
    )
  }
})
