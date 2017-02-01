import React from 'react'
import { connect } from 'react-redux'

import AddPostForm from '../components/AddPostForm'
import { addNewPost } from '../actions'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    submitUrl: url => dispatch(addNewPost(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm)
