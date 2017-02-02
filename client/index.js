import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import AppContainer from './containers/AppContainer'
import reducers from './reducers'
import PostDetailContainer from './containers/PostDetailContainer'
import PostCaptionContainer from './containers/PostCaptionContainer'
import AddPostForm from './components/AddPostForm'
import ThumbnailsContainer from './containers/ThumbnailsContainer'

let store = createStore(
  reducers,
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
        <Route path='/' component={AppContainer}>
          <IndexRoute component={ThumbnailsContainer} />
          <Route path='posts/add' component={AddPostForm} />
          <Route path='posts/:postId/add' component={PostCaptionContainer} />
          <Route path='posts/:postId(/:captionId)' component={PostDetailContainer} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
