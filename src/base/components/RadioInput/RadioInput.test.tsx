import React from 'react'
import { cleanup, render, fireEvent, screen } from '@testing-library/react'
import { RadioInput } from './RadioInput'

afterEach(cleanup)

const onChange = jest.fn()

describe('Radio', () => {
  test('should select radio option', () => {
    render(
      <RadioInput
        name='test-radio'
        data={[{ value: 'test1', label: 'test 1' }, { value: 'test2', label: 'test 2' }]}
        onChange={onChange}
      />
    )
    
    fireEvent.change(screen.getByTestId('test-radio-0'), { target: { checked: true } })
    expect(screen.getByTestId('test-radio-0')).toBeChecked()
    expect(screen.getByTestId('test-radio-1')).not.toBeChecked()

    fireEvent.change(screen.getByTestId('test-radio-1'), { target: { checked: true } })
    expect(screen.getByTestId('test-radio-0')).not.toBeChecked()
    expect(screen.getByTestId('test-radio-1')).toBeChecked()
  })
})
