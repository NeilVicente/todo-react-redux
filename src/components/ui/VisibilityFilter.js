import React from 'react'
import FilterButton from './FilterButton'

const VisibilityFilter = (props) => {
  const renderButton = (text, i) => {
    return (
      <FilterButton
        onClick={props.onClick}
        text={text}
        disabled={props.visibilityFilter === text.toLowerCase()}
        key={i}
      />
    )
  }
  return (
    <div style={{ margin: '10px'}}>
      { ['All', 'Active', 'Completed'].map(renderButton) }
    </div>
  )
}

export default VisibilityFilter;
