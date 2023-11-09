import { useState } from "react";
import { TextField } from "@mui/material";
import PropTypes from 'prop-types';

export default function ControlledField({ name, type }) {
  const [value, valueChanged] = useState('');

  const handleChange = (event) => {
    valueChanged(event.target.value);
  };

  return (
    <TextField
      style={{ margin: 8 }}
      type={type}
      label={name}
      name={name}
      onChange={handleChange}
      value={value}
    />
  );
}

ControlledField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
