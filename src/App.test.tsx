import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import App from './App'
import questions from './questions'

test('renders poll widget', () => {
  render(<App questions={questions} />)
  const entryDiv = screen.getByTestId('test-app')
  const cardElement = screen.getByTestId('card-test')
  const formElement = screen.getByTestId('form')
  const transitionFade = screen.getByTestId('question-fade-0')

  expect(entryDiv).toBeInTheDocument()
  expect(cardElement).toBeInTheDocument()
  expect(formElement).toBeInTheDocument()
  expect(transitionFade).toBeInTheDocument()
})

test('render feedback', () => {
  render(<App questions={questions} />)

  fireEvent.change(screen.getByTestId('question-0-0'), { target: { checked: true } })
  fireEvent.change(screen.getByTestId('question-1-1'), { target: { checked: true } })

  const timeout = setTimeout(() => {
    const transitionFade2 = screen.getByTestId('feedback-fade')
    expect(transitionFade2).toBeInTheDocument()
  }, 2200)
  
  clearTimeout(timeout)
})
