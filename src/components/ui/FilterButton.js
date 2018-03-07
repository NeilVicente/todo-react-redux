import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

const FilterButton = (props) => {
  return (
    <Link to={`/${props.text.toLowerCase()}`}>
      <RaisedButton
        label={props.text}
        disabled={props.disabled}
        primary={false}
        disableTouchRipple={true}
      />
    </Link>
  );
}

export default FilterButton;
