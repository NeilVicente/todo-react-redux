import store from './store'
import App from './components/containers/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blue900,
  indigo700,
  grey900
} from 'material-ui/styles/colors';
import { BrowserRouter as Router } from 'react-router-dom'


store.subscribe(() => {
  const state = JSON.stringify(store.getState())
  localStorage['redux-todo'] = state
})

window.store = store

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue900,
    primary2Color: indigo700,
    textColor: grey900
  },
  appBar: {
    height: 50,
  },
});

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router basename={BASENAME}>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
