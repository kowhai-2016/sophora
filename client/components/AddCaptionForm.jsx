import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import PostImage from './PostImage'

let captionElement = {}

const submitCaption = (props, caption, postId) => {
  if (caption) {
    props.onSubmit(caption, postId)
  }
}

const AddCaptionForm = props => {
    const postId = Number(props.params.postId)
    const post = props.posts.find(post => post.id === postId)
    return (
      <div className="container">
        <div className="row">
          <PostImage url={post.url}/>
        </div>
        <div className="row">
          <form>
            <div className="form-group">
              <label htmlFor="exampleTextarea">Drop a line down below</label>
              <textarea ref={elem => captionElement = elem} className="form-control" id="exampleTextarea" rows="3"></textarea>
              <button onClick={() => submitCaption(props, captionElement.value, postId)}>Add Caption</button>
            </div>
          </form>
        </div>
      </div>
    )
}

// AddCaptionForm.propTypes = {
//   post: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     url: PropTypes.string.isRequired
//   }).isRequired
//   // numPosts: PropTypes.number.isRequired
// }

export default AddCaptionForm
