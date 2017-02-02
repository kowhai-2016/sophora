const INITIAL_STATE = {
  posts: []
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case 'ADD_POST_FAILURE':
      return newState

    case 'ADD_POST_SUCCESS':
      newState.posts.push(action.post)
      // newState.push({
      //   id: posts.length+1,
      //   url: action.url,
      //   caption:[]
      // })
      return newState

    default:
      return state
  }
}

export default reducer
