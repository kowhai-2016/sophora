import React from 'react'

import PostImage from './PostImage'

export default React.createClass({
  render () {
    return (
      <div className="container">
        <div className="row">
          <PostImage />
        </div>
        <div className="row">
          <div className="form-group">
            <label htmlFor="exampleTextarea">Drop a line down below</label>
            <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
            <a href="#">
              <button type="button" className="btn btn-outline-success">Add Caption</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
})
