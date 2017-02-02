import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  updateUrl (evt) {
    this.setState({url: evt.target.value})
  },

  render () {
    return (
      <div className="row add-post-form">
          <div className="form-group">
            <label htmlFor="url">Image URL:</label>
            <input name='url' onChange={this.updateUrl} className="form-control" id="url" placeholder="Place your image URL here" style={{width: '100%'}} />
          </div>
          <button onClick={() => this.props.submitUrl(this.state.url)} type="submit" className="btn btn-primary pull-right">Add Post</button>
      </div>
    )
  }
})
