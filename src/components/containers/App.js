import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoInput from './TodoInput'
import TodoList from './TodoList';
import VisibilityFilter from './VisibilityFilter'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import CheckIcon from 'material-ui/svg-icons/av/playlist-add-check'
import IconButton from 'material-ui/IconButton'
import { Route } from 'react-router-dom'


export default () => {

  const content = (
    <div key='div'>
      <AppBar
        title={ 'Todo List'}
        iconStyleLeft={{ cursor: 'default'}}
        zDepth={2}
        iconElementLeft={<IconButton><CheckIcon/></IconButton>}
      />
      <div style={{padding: '10px 14px 20px'}}>
        <Route path='/:filter?' render={(props) => {
          return (
            <div>
              <TodoList {...props}/>
              <TodoInput />
              <VisibilityFilter {...props}/>
            </div>
          )
        }}/>
      </div>
    </div>
  )
  return (
    <Paper
      style={{ margin: '10px auto', maxWidth: '80em' }}
      children={ content } 
    />
  )
}
