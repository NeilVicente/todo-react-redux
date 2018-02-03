import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import sampleData from '../initialState.json'

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

const initialState = (localStorage['redux-todo']) ?
  JSON.parse(localStorage['redux-todo']):
  sampleData

const storeFactory = (initialState = {}) => {
  return applyMiddleware(thunk, consoleMesssages)(createStore)(appReducer, initialState)
}

export default storeFactory(initialState)