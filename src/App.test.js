import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import RollDice from './components/RollDice/RollDice';
import React from 'react';
// import { shallow } from 'enzyme';
// import Button from './Button';

// describe('Test Button component', () => {
//   it('Test click event', () => {
//     const mockCallBack = jest.fn();

//     const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
//     button.find('button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });

// test('should call closeRightSection callback', () => {
//   const testSpy = jest.fn();

//   const { getByTestId } = render(<RollDice />);

//   fireEvent.click(getByTestId('id'));

//   expect(testSpy).toHaveBeenCalled();
// });

test('Renders Title in main page', () => {
  render(<App />);
  const title = screen.getByText(/RollDice game/i);
  expect(title).toBeInTheDocument();
});

test('Has a button', () => {
  render(<App />);
  const hasButton = screen.getByRole('button', { name: /Click to roll/i });
  expect(hasButton).toBeInTheDocument();
});
