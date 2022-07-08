import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

it('renders NotFound-Page', () => {
  render(<NotFound />);
  const Para = screen.getByText('Page Not Found');
  expect(Para).toBeInTheDocument();
});
