import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducThunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'
import * as serviceWorker from './serviceWorker'

// Development only axios helpers
import axios from 'axios'
window.axios = axios
  
const store = createStore(reducers, {}, applyMiddleware(reducThunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
