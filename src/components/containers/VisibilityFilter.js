import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions'
import VisibilityFilter from '../ui/VisibilityFilter'

const mapStateToProps = state => {
  return {
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (filter) => {
      dispatch(
        setVisibilityFilter(filter)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter)
