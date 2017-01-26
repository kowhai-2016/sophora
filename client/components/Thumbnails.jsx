import React from 'react'

import PostButton from './PostButton'

export default React.createClass({
  imageRendering() {
    return this.props.posts.map((post) => {
      return  (
        <div className="col-md-3">
          <img className="img-fluid thumbnail" src="{post.url}" />
        </div>
      )
    })
  },

  render() {
    return(
      <div className="row thumbnail-gallery">
        <PostButton />
        {this.imageRendering()}
      </div>
    )
  }
})
