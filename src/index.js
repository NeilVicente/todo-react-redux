import store from './store'
import App from './components/containers/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom'


store.subscribe(() => {
  const state = JSON.stringify(store.getState())
  localStorage['redux-todo'] = state
})

window.store = store

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider>
      <Router basename={BASENAME}>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
