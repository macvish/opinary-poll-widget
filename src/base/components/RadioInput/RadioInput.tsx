import React, { InputHTMLAttributes } from 'react'
import { Radio, RadioGroup, FormControlLabel } from '@mui/material'

import './RadioInput.css'

interface RadioInputProps {
  name?: string
  data: Array<{ value: string | number, label: string }>
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  dataTestId?: string
}

interface RadioComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  "data-testid": any
}

export const RadioInput: React.FC<RadioInputProps> = ({ name, data, onChange, dataTestId  }) => {
  return (
    <RadioGroup className="radio-content-container" onChange={onChange}>
      {data.map((item, index) => {
        return (
          <FormControlLabel 
            key={index} 
            className="radio-content-wrapper" 
            value={item.value}
            role="radio"
            control={<Radio inputProps={{ "data-testid": dataTestId ? `${dataTestId}-${index}` : `${name}-${index}` } as RadioComponentProps} />} 
            label={item.label}
            name={name}
            sx={{ marginLeft: 0, marginRight: 0 }}
          />
        )
      })}
    </RadioGroup>
  )
}
