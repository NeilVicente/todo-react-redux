import C from '../constants'
import { combineReducers } from 'redux'

export  const todo = (state = null, action) => {
  return action.type === C.ADD_TODO ?
    action.payload:
    state
}

export const allTodos = (state = [], action) => {
  switch (action.type) {
    case C.ADD_TODO:
      const hasTodo = state.some(todo => todo.text.trim().toLowerCase() === action.payload.text.trim().toLowerCase());
      return (hasTodo) ?
        state:
        [
          ...state,
          todo(null, action)
        ]
    case C.REMOVE_TODO:
      return state.filter((todo, index) => index !== action.payload)
    case C.CHECK_TODO:
    case C.UNCHECK_TODO:
      const updatedTodos = state.map((todo, index) => {
        if (index === action.payload) {
          return { ...todo, completed: action.type === C.CHECK_TODO }
        }
        return todo
      })
      return updatedTodos
    default:
      return state
  }
}

export const toggleCompleted = (state = true, action) => {
  if (action.type === C.SHOW_COMPLETED) {
    return true;
  } else if ((action.type) === C.HIDE_COMPLETED) {
    return false
  } else {
    return state
  }
}

export const todoInput = (state = '', action) => {
  switch (action.type) {
    case C.CLEAR_TODOINPUT:
      return '';
    case C.SET_TODOINPUT:
      return action.payload.text
    default:
      return state
  }
}

export const visibilityFilter = (state = 'all', action) => {
  switch (action.type) {
    case C.SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  allTodos,
  showCompleted: toggleCompleted,
  todoInput,
  visibilityFilter,
})
