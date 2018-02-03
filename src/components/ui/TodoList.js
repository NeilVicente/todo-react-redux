import React from 'react'
import { List, Toggle } from 'material-ui'
import Todo from '../containers/Todo';
import { Divider } from 'material-ui/Divider';

const TodoList = (props) => {
  const createListItem = (todo, i) => {
    if (!props.showCompleted && todo.completed) { return }
    return (
      <div>
        <Todo
          text={`${todo.text}`}
          checked={ todo.completed }
          todoKey={i}
        />
      </div>
    )
  }
  return (
    <div>
      <Toggle
        label='Show completed todos'
        style={{
          block: {
            maxWidth: 250,
          }}}
        defaultToggled={ props.showCompleted }
        onToggle={ props.onToggleCompleted }
      />
      <div>
        <List>
          { props.todos.map(createListItem) }
        </List>
      </div>
    </div>
  )
}

export default TodoList