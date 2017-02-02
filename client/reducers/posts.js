export default (state = [], action) => {
  let newState = state.slice(0)
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
    default:
      return state
  }
}
