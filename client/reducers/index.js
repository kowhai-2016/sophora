import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'

// const reducer = (state = INITIAL_STATE, action) => {
//   const newState = Object.assign({}, state)
//
//   switch (action.type) {
//     case 'ACTION_TYPE':
//       return newState
//
//     // case 'POST_CAPTION':
//     //   newState.caption = action.caption
//
//     default:
//       return state
//   }
// }

export default combineReducers({
  posts,
  routing: routerReducer
})
