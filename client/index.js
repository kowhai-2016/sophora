import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducers from './reducers'
import PostDetail from './components/PostDetail'
import AddCaptionForm from './components/AddCaptionForm'
import AddPostForm from './components/AddPostForm'
import Thumbnails from './components/Thumbnails'

let store = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const history = syncHistoryWithStore(hashHistory, store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
       <Route path='/' component={App}>
        <IndexRoute component={Thumbnails} />
        <Route path="posts/add" component={AddPostForm} />
        <Route path="posts/:postId" component={PostDetail} />
        <Route path="posts/:postId/add" component={AddCaptionForm} />
        <Route path="posts/:postId/:captionId" component={PostDetail} />
       </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
