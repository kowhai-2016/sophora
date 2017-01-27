import { connect } from 'react-redux'

import Thumbnails from '../components/Thumbnails'

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Thumbnails)
