import TodoInput from '../ui/TodoInput'
import { connect } from 'react-redux'
import { addTodo, clearTodoInput, setTodoInput } from '../../actions'

const mapStateToProps = state => {
  return {
    todoInput: state.todoInput,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onKeyPress(e) {
      if (e.key === 'Enter') {
        e.preventDefault()
        dispatch(
          addTodo({
            text: e.target.value,
            completed: false
          })
        )
        dispatch(
          clearTodoInput()
        )
      }
    },
    onChange(e) {
      dispatch(
        setTodoInput({
          text: e.target.value
        })
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)
