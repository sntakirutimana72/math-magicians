import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Calculator from './Calculator';

beforeEach(() => {
  act(() => {
    render(<Calculator />);
  });
})

describe('Calculator', () => {
  it('loads all buttons', () => {
    const keysContainer = screen.getByTestId('calc-keys');
    expect(keysContainer).toBeInTheDocument();
    expect(keysContainer.children).toHaveLength(19);
  })

  it('functionalities', () => {
    act(() => screen.getByText('1').click());
    act(() => screen.getByText('5').click());
    act(() => screen.getByText('.').click());
    act(() => screen.getByText('5').click());
    act(() => screen.getByText('+').click());
    act(() => screen.getByText('3').click());
    act(() => screen.getByText('+/-').click());
    act(() => screen.getByText('=').click());

    const resultEl = screen.getByText('12.5');
    expect(resultEl).toBeInTheDocument();
  })
});
