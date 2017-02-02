import { connect } from 'react-redux'

import { getInitialData } from '../actions'
import App from '../components/App'

const mapStateToProps = ({ posts }, ownProps) => {
  return {
    posts,
    children: ownProps.children
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInitialData: () => { dispatch(getInitialData()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
