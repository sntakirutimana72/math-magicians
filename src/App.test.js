import {
    render, screen, fireEvent, waitFor,
  } from '@testing-library/react';
  import { BrowserRouter } from 'react-router-dom';
  import App from './App';
  
  jest.mock('./helpers/quotes', () => [
    { title: 'some quote', by: 'author' },
  ]);
  
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });
  
  describe('App', () => {
    it('renders header', () => {
      const Title = screen.getByText('Math Magicians');
      expect(Title).toBeInTheDocument();
    });
  
    it('contains links', () => {
      const Links = screen.getAllByRole('link');
      expect(Links).toHaveLength(4);
    });
  
    it('redirect to calculator-Page', async () => {
      fireEvent.click(screen.getByRole('link', { name: 'Calculator' }));
      await waitFor(() => {
        const KeysContainer = screen.getByTestId('calc-keys');
        expect(KeysContainer).toBeInTheDocument();
      });
    });
  
    it('redirect to Quote-Page', async () => {
      fireEvent.click(screen.getByRole('link', { name: 'Quote' }));
      await waitFor(() => {
        const Para = screen.getByText('some quote');
        expect(Para).toBeInTheDocument();
      });
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  