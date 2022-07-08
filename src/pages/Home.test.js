import { render, screen } from '@testing-library/react';
import Home from './Home';

it('renders Homepage', () => {
  render(<Home />);
  const H1 = screen.getByText('Welcome to our page!');
  expect(H1).toBeInTheDocument();
});
