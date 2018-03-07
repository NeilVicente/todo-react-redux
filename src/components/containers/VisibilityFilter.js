import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions'
import VisibilityFilter from '../ui/VisibilityFilter'

const mapStateToProps = (state, ownProps) => {
  return {
    filter: ownProps.location.pathname.replace('/', '')
  }
}

export default connect(mapStateToProps)(VisibilityFilter)
