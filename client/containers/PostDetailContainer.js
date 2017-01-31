import { connect } from 'react-redux'

import { likeCaption } from '../actions'
import PostDetail from '../components/PostDetail'

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    likeCaption ({ captionId, postId }) {
      dispatch(likeCaption({captionId, postId}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
