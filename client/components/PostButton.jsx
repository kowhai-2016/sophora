import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className='row' style={{width: '85%'}}>
        <div className='col-11' />
        <div className='col-1'>
          <Link className='btn btn-primary' to='posts/add' role='button'><span className='fa fa-plus' /></Link>
        </div>
      </div>
    )
  }
})
