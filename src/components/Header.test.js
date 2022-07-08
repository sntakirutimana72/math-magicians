import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
});

describe('Header', () => {
  it('renders header', () => {
    const Title = screen.getByText('Math Magicians');
    expect(Title).toBeInTheDocument();
  });

  it('contains links', () => {
    const Links = screen.getAllByRole('link');
    expect(Links).toHaveLength(4);
  });
});
