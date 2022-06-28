import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator', () => {
  render(<App />);
  const DotElement = screen.getByText('.');
  expect(DotElement).toBeInTheDocument();
});
