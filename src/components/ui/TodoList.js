import React from 'react'
import { List, Toggle } from 'material-ui'
import Todo from '../containers/Todo';
import { Divider } from 'material-ui/Divider';

const TodoList = (props) => {
  const createListItem = (todo, i) => {
    let visible = true
    if ((props.visibilityFilter === 'active' && todo.completed)
      || (props.visibilityFilter === 'completed' && !todo.completed)) {
      visible = false;
    }
    return (
      <div>
        <Todo
          text={`${todo.text}`}
          checked={ todo.completed }
          todoKey={i}
          visible={visible}
        />
      </div>
    )
  }
  return (
    <div>
      <div>
        <List>
          { props.todos.map(createListItem) }
        </List>
      </div>
    </div>
  )
}

export default TodoList