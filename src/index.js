import store from './store'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


store.subscribe(() => {
  const state = JSON.stringify(store.getState())
  localStorage['redux-todo'] = state
})

window.store = store

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);
