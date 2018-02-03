import Todo from '../ui/Todo'
import { connect } from 'react-redux'
import { checkTodo, uncheckTodo } from '../../actions'

const mapStateToProps = (state, ownProps) => {
  // let current = state.allTodos.find((todo) => ownProps.text === todo.text)
  return {
    text: ownProps.text,
    checked: ownProps.checked,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCheck: (e, isInputChecked) => {
      dispatch(
        isInputChecked ? checkTodo(ownProps.todoKey) : uncheckTodo(ownProps.todoKey)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
