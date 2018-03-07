import React from 'react'
import TodoList from '../ui/TodoList'
import { connect } from 'react-redux'
import { showCompleted, hideCompleted } from '../../actions'


const mapStateToProps = (state, ownProps)=> {
  return {
    todos: state.allTodos,
    filter: ownProps.location.pathname.replace('/', '')
  }
}

export default connect(mapStateToProps)(TodoList)
