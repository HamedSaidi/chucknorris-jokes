import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const browserHistory = createBrowserHistory()
const middleware = [thunk, routerMiddleware(browserHistory)]
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  if (typeof window.devToolsExtension === 'function') {
    enhancers.push(window.devToolsExtension())
  }
}

export const history = browserHistory
export const store = createStore(
  combineReducers({ router: routerReducer, ...rootReducer }),
  compose(applyMiddleware(...middleware), ...enhancers),
)
