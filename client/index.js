import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducers from './reducers'
import PostDetailContainer from './containers/PostDetailContainer'
import AddCaptionForm from './components/AddCaptionForm'
import AddNewPostContainer from './containers/AddNewPostContainer'
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
        <Route path='/' component={App}>
          <IndexRoute component={ThumbnailsContainer} />
          <Route path='posts/add' component={AddNewPostContainer} />
          <Route path='posts/:postId/add' component={AddCaptionForm} />
          <Route path='posts/:postId(/:captionId)' component={PostDetailContainer} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
