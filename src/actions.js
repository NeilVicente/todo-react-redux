import C from './constants'

export const addTodo = todo => ({
  type: C.ADD_TODO,
  payload: todo
})

export const removeTodo = index => ({
  type: C.REMOVE_TODO,
  payload: index
})

export const checkTodo = index => ({
  type: C.CHECK_TODO,
  payload: index
})

export const uncheckTodo = index => ({
  type: C.UNCHECK_TODO,
  payload: index
})

export const hideCompleted = () => ({
  type: C.HIDE_COMPLETED,
})

export const showCompleted = () => ({
  type: C.SHOW_COMPLETED,
})

export const clearTodoInput = () => ({
  type: C.CLEAR_TODOINPUT
})

export const setTodoInput = (text) => ({
  type: C.SET_TODOINPUT,
  payload: text
})

export const setVisibilityFilter = (filter) => ({
  type: C.SET_VISIBILITY_FILTER,
  payload: filter
})