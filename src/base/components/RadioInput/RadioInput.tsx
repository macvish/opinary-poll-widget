import React from 'react'

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
    <div className={className}>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <input type="radio" name={name} value={item.value} onChange={onChange} className={radioClassName} />
            <span className={labelClassName} >{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}
