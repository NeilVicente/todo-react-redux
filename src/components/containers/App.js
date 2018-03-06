import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoInput from './TodoInput'
import TodoList from './TodoList';
import VisibilityFilter from './VisibilityFilter'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import CheckIcon from 'material-ui/svg-icons/av/playlist-add-check'
import IconButton from 'material-ui/IconButton'


export default () => {

  const content = (
    <div key='div'>
      <AppBar
        title={ 'React Redux Todo '}
        iconStyleLeft={{ cursor: 'default'}}
        zDepth={2}
        iconElementLeft={<IconButton><CheckIcon/></IconButton>}
      />
      <div style={{padding: '30px'}}>
        <TodoList />
        <TodoInput />
        <VisibilityFilter/>
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
