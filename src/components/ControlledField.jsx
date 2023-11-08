import { useState } from "react";


export default function ControlledField({ name, type }) {
  const [value, valueChanged] = useState('')

  const handleChange = (event) => {
    valueChanged(event.target.value)
  }

  return (
    <input
      type={type}
      name={name}
      onChange={handleChange}
      value={value}
    />
  )
}