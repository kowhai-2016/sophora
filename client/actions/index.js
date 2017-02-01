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
