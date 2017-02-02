import request from 'superagent'

export const getInitialData = () => {
  return dispatch => {
    request.get(`/posts`)
      .end((err, res) => {
        if (!err) {
          const posts = JSON.parse(res.text)
          return dispatch(initialDataLoaded(posts))
        }
      })
  }
}

export const initialDataLoaded = posts => {
  return {
    type: 'INITIAL_DATA_RETRIEVED',
    posts
  }
}

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
          const like = response.body.like
          return dispatch(likeCaptionSuccess(postId, captionId, like))
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

export const likeCaptionSuccess = (postId, captionId, like) => {
  return {
    captionId,
    like,
    postId,
    type: 'LIKE_CAPTION_SUCCESS'
  }
}
