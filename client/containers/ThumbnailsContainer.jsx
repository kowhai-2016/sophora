import { connect } from 'react-redux'

import Thumbnails from '../components/Thumbnails'
// import ..... from '../actions'



const mapStateToProps = state => {

  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // **action function** : () => { dispatch(**action function**)}
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Thumbnails)
