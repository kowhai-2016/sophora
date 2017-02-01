import request from 'superagent'

export const likeCaption = (postId, captionId) => {
  const origin = window.location.origin
  return dispatch => {
    dispatch(likeCaptionPending(postId, captionId))
    request.put(`${origin}/posts/${postId}/${captionId}`)
      .end((error, response) => {
        if (error) {
          return dispatch(likeCaptionFailure(
            postId,
            captionId,
            error.message
          ))
        } else {
          const likes = response.body.likes
          return dispatch(likeCaptionSuccess(postId, captionId, likes))
        }
      })
  }
}

export const likeCaptionFailure = (postId, captionId, message) => {
  return {
    captionId,
    postId,
    message,
    type: 'LIKE_CAPTION_FAILURE'
  }
}

export const likeCaptionPending = (postId, captionId) => {
  return {
    captionId,
    postId,
    type: 'LIKE_CAPTION_PENDING'
  }
}

export const likeCaptionSuccess = (postId, captionId, likes) => {
  return {
    captionId,
    likes,
    postId,
    type: 'LIKE_CAPTION_SUCCESS'
  }
}
