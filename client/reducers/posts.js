const handlers = {
  CAPTION_ADD_SUCCESS: (state, action) => {
    const newState = state.slice(0) // Copy the state array
    let captions = newState.find(post => post.id === action.postId).captions
      newState
        .find(post => post.id === action.postId) // Find the right post
        .captions.push({
          id: captions.length+1,
          text: action.caption
        })
    return newState
  }
}

export default (state = INITIAL_STATE, action) => {
  let newState = state.slice(0) // Copy the state array
  switch (action.type) {

    case 'INITIAL_DATA_RETRIEVED':
      newState = action.posts
      return newState

    case 'LIKE_CAPTION_SUCCESS':
      newState
        .find(post => post.id === action.postId) // Find the right post
        .captions
        .find(caption => caption.id === action.captionId) // Find the right caption
        .like = action.like // Update the number of like
      return newState

    case 'CAPTION_ADD_SUCCESS':
      let captions = newState.find(post => post.id === action.postId).captions
      newState
        .find(post => post.id === action.postId) // Find the right post
        .captions.push({
          id: captions.length+1,
          text: action.caption
        })
      return newState

    default:
      return state
  }
}
