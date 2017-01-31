import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { addCaption } from '../actions'
import AddCaptionForm from '../components/AddCaptionForm'
import PostDetailContainer from '../containers/PostDetailContainer'


const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (caption, postId) => {
      dispatch(addCaption(caption, postId))
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCaptionForm)
