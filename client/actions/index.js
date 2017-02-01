import request from 'superagent'
// import { push } from 'react-router-redux'
import {hashHistory} from 'react-router'

export const addCaption = (caption, postId) => {
  return dispatch => {
    const target = `http://localhost:3000/posts/${postId}`

    request.post(target)
      .set('Content-Type', 'application/json')
      .send({text: caption})
      .end((err, res) => {
        if (err) {
          console.error(err)
          return dispatch(captionAddFail(caption, postId))
        } else {
          dispatch(captionAddSuccess(caption, postId))
          hashHistory.push(`/posts/${postId}`)
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
