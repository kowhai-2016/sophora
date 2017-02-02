import request from 'superagent'
import {hashHistory} from 'react-router'

export const addNewPost = (url, postId) => {
  return dispatch => {
    const ROOT_URL = '/posts'

    request.post(ROOT_URL)
      .send ({ url })
      .end ((err, res) => {
        if (err) {
          return dispatch(addPostFailure({
            message: error.message
          }))
        } else {
          const post = res.body
          dispatch(addPostSuccess(url, post))
          hashHistory.push(`/posts/${post.id}`)
        }
      })
  }
}

export const addPostFailure = ({ postId }) => {
  return {
    type: 'ADD_POST_FAILURE',
    postId
  }
}

export const addPostSuccess = ({ post, url }) => {
  return {
    type: 'ADD_POST_SUCCESS',
    post,
    url
  }
}

export const likeCaption = ({ captionId, postId }) => {
  const origin = window.location.origin
  return dispatch => {
    dispatch(likeCaptionPending({captionId, postId}))
    request.put(`${origin}/posts/${postId}/${captionId}`)
      .end((error, response) => {
        if (error) {
          return dispatch(likeCaptionFailure({
            captionId,
            postId,
            message: error.message
          }))
        } else {
          const likes = response.body.likes
          return dispatch(likeCaptionSuccess({captionId, likes, postId}))
        }
      })
  }
}

export const likeCaptionFailure = ({ captionId, postId }) => {
  return {
    captionId,
    postId,
    type: 'LIKE_CAPTION_FAILURE'
  }
}

export const likeCaptionPending = ({ captionId, postId }) => {
  return {
    captionId,
    postId,
    type: 'LIKE_CAPTION_PENDING'
  }
}

export const likeCaptionSuccess = ({ captionId, likes, postId }) => {
  return {
    captionId,
    likes,
    postId,
    type: 'LIKE_CAPTION_SUCCESS'
  }
}
