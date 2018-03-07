import React from 'react'
import TodoList from '../ui/TodoList'
import { connect } from 'react-redux'
import { showCompleted, hideCompleted } from '../../actions'


const mapStateToProps = (state, ownProps)=> {
  return {
    todos: state.allTodos,
    filter: ownProps.match.params.filter
  }
}

export default connect(mapStateToProps)(TodoList)
