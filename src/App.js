import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoInput from './components/containers/TodoInput'
import TodoList from './components/containers/TodoList';


export default () => (
  <MuiThemeProvider>
    <TodoList/>
    <TodoInput />
  </MuiThemeProvider>
);
