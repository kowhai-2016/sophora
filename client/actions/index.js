import request from 'superagent'
import { push } from 'react-router-redux'

export const addCaption = (caption, postId) => {
  return dispatch => {
    const target = `http://localhost:3000/posts/${postId}`

    request.post(target)
      .end((err, res) => {
        if (err) {
          console.error(err)
          return dispatch(captionAddFail(caption, postId))
        } else {
          dispatch(captionAddSuccess(caption, postId))
          dispatch(push(`/post/${postId}`))
        }
      })
  }
}

export const captionAddSuccess = (caption, postId) => {
  return {
    type: 'CAPTION_ADD_SUCCESS',
    caption,
    postId
  }
}

export const captionAddFail = (caption, postId) => {
  return {
    type: 'CAPTION_ADD_FAIL',
    caption,
    postId
  }
}

export const addingCaption = (caption, postId) => {
  return {
    type: 'ADDING_CAPTION',
    caption,
    postId
  }
}
