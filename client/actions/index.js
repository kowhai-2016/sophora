import axios from 'axios'

const ROOT_URL = 'http://localhost:3000/posts'
export const ADD_POST = 'ADD_POST'

export function addNewPost (url) {
  return dispatch => {
    dispatch({type: 'ADD_NEW_POST_PENDING'})
    return axios.post(`${ROOT_URL}`, { url })
      .then(response => {
        dispatch({
          type: 'ADD_NEW_POST_SUCCESS',
          url: response.data
        })
      })
      .catch(error => {
        dispatch({type: 'ADD_NEW_POST_FAILURE', message: error.message})
      })
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
