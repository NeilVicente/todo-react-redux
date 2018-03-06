import React from 'react';
import FlatButton from 'material-ui/FlatButton'

const FilterButton = (props) => {
  return (
    <FlatButton
      onClick={() => { props.onClick(props.text.toLowerCase()) }}
      label={props.text}
      disabled={props.disabled}
      primary={true}
      disableTouchRipple={true}
    />
  );
}

export default FilterButton;
