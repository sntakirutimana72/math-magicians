import { render, screen } from '@testing-library/react';
import CalcButton from './CalcButton';

it('CalcButton', () => {
  const onClicked = jest.fn();
  render(<CalcButton name="AC" classes="" handlePress={onClicked} />);
  const button = screen.getByText('AC');
  expect(button).toBeInTheDocument();
  button.click();
  expect(onClicked).toHaveBeenCalledTimes(1);
});
