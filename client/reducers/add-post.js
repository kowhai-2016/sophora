import { ADD_POST } from '../actions'

const INITIAL_STATE = {
  posts: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state, post: action.request
      }
    break

    default:
      return state
  }
}
