import { connect } from 'react-redux'

import { likeCaption } from '../actions'
import PostDetail from '../components/PostDetail'

const mapStateToProps = ({ posts }) => {
  return {
    posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    likeCaption (postId, captionId) {
      dispatch(likeCaption(postId, captionId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
