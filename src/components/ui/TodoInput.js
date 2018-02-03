import React from 'react';
import TextField from 'material-ui/TextField';

const TodoInput = (props) => (
  <TextField
    floatingLabelText={ 'Add a todo' }
    onKeyPress={ props.onKeyPress }
    onChange={ props.onChange }
    value={ props.todoInput }
  />
);

export default TodoInput;