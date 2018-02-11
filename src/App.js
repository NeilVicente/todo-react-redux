import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoInput from './components/containers/TodoInput'
import TodoList from './components/containers/TodoList';
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'


export default () => {

  const content = (
    <div key='div'>
      <AppBar
        title={ 'React Redux Todo '}
        zDepth={2}
      />
      <div style={{padding: '30px'}}>
        <TodoList />
        <TodoInput />
      </div>
    </div>
  )
  return (
    <Paper
      style={{ margin: '10px auto' }}
      children={ content } 
    />
  )
}
