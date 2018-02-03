import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'

const consoleMesssages = store => next => action => {
  let result
  
  console.groupCollapsed(`dispatching action => ${action.type}`)
  console.log('todos', store.getState().allTodos.length)
  result = next(action)

  let { allTodos, showCompleted } = store.getState()

  console.log(`
      todos: ${allTodos.length}
      showCompleted: ${showCompleted}
  `)
  console.groupEnd()
  return result
}

export default (initialState = {}) => {
  return applyMiddleware(consoleMesssages)(createStore)(appReducer, initialState)
}
