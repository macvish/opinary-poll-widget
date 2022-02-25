import React from 'react'

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
    <div className={`${className ? `${className} ` : ''}radio-content-container`}>
      {data.map((item, index) => {
        return (
          <div key={index} className="radio-content-wrapper">
            <input type="radio" name={name} value={item.value} onChange={onChange} className={radioClassName} />
            <label htmlFor={name} className={labelClassName} >{item.label}</label>
          </div>
        )
      })}
    </div>
  )
}
