const INITIAL_STATE = {
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case 'ACTION_TYPE':
      return newState

    // case 'POST_CAPTION':
    //   newState.caption = action.caption

    default:
      return state
  }
}

export default reducer
