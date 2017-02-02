import React from 'react'
import { connect } from 'react-redux'

import AddPostForm from '../components/AddPostForm'
import { addNewPost } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    submitUrl: (url, postId) => dispatch(addNewPost(url, postId))
  }
}

export default connect(null, mapDispatchToProps)(AddPostForm)
