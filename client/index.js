import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { hashHistory, Route, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/App'
import PostDetail from './components/PostDetail'
import reducers from './reducers'

let store = createStore(
  reducers, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const history = syncHistoryWithStore(hashHistory, store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history} component={App}>
        <Route path='/posts/:postId(/:captionId)' component={PostDetail} />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
