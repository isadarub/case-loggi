import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('Renders title in main page', () => {
  render(<App />);
  const title = screen.getByText(/RollDice game/i);
  expect(title).toBeInTheDocument();
});

test('Has a button', () => {
  render(<App />);
  const hasButton = screen.getByRole('button', { name: /Click to roll/i });
  expect(hasButton).toBeInTheDocument();
});

test('Test button click', () => {
  render(<App />);
  const buttonElement = screen.getByText('Click to roll');
  fireEvent(buttonElement, new MouseEvent('click', {}));
  const modal = screen.queryByText('Clicked!');
  expect(modal).not.toBeInTheDocument();
});
