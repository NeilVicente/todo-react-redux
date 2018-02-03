import appReducer from './reducers'
import { createStore } from 'redux'

export default (initialState = {}) => createStore(appReducer, initialState)
