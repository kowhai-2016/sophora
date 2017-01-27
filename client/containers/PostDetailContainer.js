import { connect } from 'react-redux'

import PostDetail from '../components/PostDetail'

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostDetail)
