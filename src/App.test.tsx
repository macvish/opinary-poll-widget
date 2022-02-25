import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';
import questions from './questions';

test('renders learn react link', () => {
  render(<App questions={questions} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
