import React from 'react';
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router-dom'

const FilterButton = (props) => {
  return (
    <Link to={`/${props.text.toLowerCase()}`}>
      <FlatButton
        label={props.text}
        disabled={props.disabled}
        primary={true}
        disableTouchRipple={true}
      />
    </Link>
  );
}

export default FilterButton;
