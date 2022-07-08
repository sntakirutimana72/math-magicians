import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';

it('renders Calculator-Page', () => {
  render(<Calculator />);
  const H1 = screen.getByText('Lets do some math!');
  expect(H1).toBeInTheDocument();
  const KeysContainer = screen.getByTestId('calc-keys');
  expect(KeysContainer).toBeInTheDocument();
});
