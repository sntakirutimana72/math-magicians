import { render, screen } from '@testing-library/react';
import CalcLogger from './CalcLogger';

it('CalcLogger', () => {
  render(<CalcLogger next={null} total={"0.5"} operation={"+"} />);
  const loggerEl = screen.getByText('0.5+');
  expect(loggerEl).toBeInTheDocument();
});
