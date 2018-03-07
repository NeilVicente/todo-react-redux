import React from 'react'
import FilterButton from './FilterButton'

const VisibilityFilter = (props) => {
  const renderButton = (text, i) => {
    const disabled = props.filter === text.toLowerCase() || !props.filter && text.toLowerCase() === 'all';
    return (
      <FilterButton
        onClick={props.onClick}
        text={text}
        disabled={disabled}
        key={i}
      />
    )
  }
  return (
    <div style={{ margin: '30px 0'}}>
      { ['All', 'Active', 'Completed'].map(renderButton) }
    </div>
  )
}

export default VisibilityFilter;
