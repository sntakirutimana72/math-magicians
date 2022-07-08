import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Quote from './Quote';

jest.mock('../helpers/quotes', () => [
  { title: 'some quote', by: "author" },
]);

it('renders Quote-Page', () => {
  act(() => {
    render(<Quote />);
  });
  const Para = screen.getByText('some quote');
  expect(Para).toBeInTheDocument();
});
