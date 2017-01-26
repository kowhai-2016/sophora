import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="row addPostForm">
        <form style={{width: '100%'}}>
          <div className="form-group">
            <label htmlFor="url">Image URL:</label>
            <input type="url" className="form-control" id="url" placeholder="Place your image URL here" style={{width: '100%'}} />
          </div>
          <a href="#">
            <button type="submit" className="btn btn-primary pull-right">Add Post</button>
          </a>
        </form>
      </div>
    )
  }
})
