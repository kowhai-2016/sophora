const INITIAL_STATE = {
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case 'ACTION_TYPE':
      return newState

    default:
      return state
  }
}

export default reducer
