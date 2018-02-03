import store from './store'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


store.subscribe(() => {
  const state = JSON.stringify(store.getState())
  localStorage['redux-todo'] = state
})

window.store = store

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
