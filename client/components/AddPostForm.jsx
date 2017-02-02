import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className="container">
        <div className="row add-post-form">
          <form>
            <div className="form-group">
              <label htmlFor="url">Image URL:</label>
              <input className="url-form" name='url' type="url" id="url" placeholder="Place your image URL here"/>
              <div className="row post-button">
                <Link role="button" to="/posts/1/add" className="btn btn-primary pull-right">Add Post</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
})
