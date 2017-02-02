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
          dispatch(addPostSuccess({url, post}))
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
  console.log(post)
  return {
    type: 'ADD_POST_SUCCESS',
    post,
    url
  }
}

export const addCaption = (caption, postId) => {
  return dispatch => {
    const target = `/posts/${postId}`

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
