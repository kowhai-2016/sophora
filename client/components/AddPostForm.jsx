import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="row add-post-form">
        <form style={{width: '100%'}}>
          <div className="form-group">
            <label htmlFor="url">Image URL:</label>
            <input name='url' type="url" className="form-control" id="url" placeholder="Place your image URL here" style={{width: '100%'}} />
          </div>
          <button type="submit" className="btn btn-primary pull-right">Add Post</button>
        </form>
      </div>
    )
  }
})
