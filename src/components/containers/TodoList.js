import React from 'react'
import TodoList from '../ui/TodoList'
import { connect } from 'react-redux'
import { showCompleted, hideCompleted } from '../../actions'


const mapStateToProps = state => {
  return {
    todos: state.allTodos,
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleCompleted(e, isInputChecked) {
      dispatch(
        isInputChecked ? showCompleted() : hideCompleted()
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
