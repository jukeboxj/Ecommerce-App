import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import store from './store'
import App from './App'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
