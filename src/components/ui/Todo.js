import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import ListItem from 'material-ui/List/ListItem'
import Divider from 'material-ui/Divider'

const renderCheckbox = (props) => {
  return (
    <Checkbox 
      checked={ props.checked }
      onCheck= { props.onCheck }
    />
  )
}

const Todo = (props) => {
  let style = { fontFamily: 'Verdana' }
  if (props.checked) {
    style.textDecoration = 'line-through'
  }
  return (
    <ListItem
      primaryText={ props.text }
      style={style}
      leftCheckbox={ renderCheckbox(props) }
    />
  )
}

export default Todo
