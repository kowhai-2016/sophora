const INITIAL_STATE = {
  posts: []
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case 'SAVED_NEW_POST':
      newState.push(url)
      return newState

    default:
      return state
  }
}

export default reducer
