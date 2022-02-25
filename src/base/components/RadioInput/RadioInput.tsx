import React from 'react'
import { Radio, RadioGroup, FormControlLabel } from '@mui/material'

import './RadioInput.css'

interface RadioInputProps {
  name: string
  data: Array<{ value: string | number, label: string }>
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  radioClassName?: string
  labelClassName?: string
}

export const RadioInput: React.FC<RadioInputProps> = ({ name, data, onChange, className, radioClassName, labelClassName  }) => {
  return (
    <RadioGroup className="radio-content-container" onChange={onChange}>
      {data.map((item, index) => {
        return (
          <FormControlLabel 
            key={index} 
            className="radio-content-wrapper" 
            value={item.value} 
            control={<Radio />} 
            label={item.label}
            name={name}
            sx={{ marginLeft: 0, marginRight: 0 }}
          />
        )
      })}
    </RadioGroup>
  )
}
