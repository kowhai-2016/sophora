import connect from 'react-redux'

import {postCaption} from '../actions'
import CaptionForm from '../components/AddCaptionForm'

// const mapStateToProps = state => {
//   return{
//     caption: state.caption
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    postCaption: state.postCaption
  }
}

// export default connect(mapDispatchToProps)(CaptionForm)
