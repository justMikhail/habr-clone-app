import { render, screen } from '@testing-library/react';
import { SharedButton, ThemeButton } from 'shared/ui/SharedButton/SharedButton';

describe('SharedButton', () => {
  test('Test render', () => {
    render(<SharedButton>TEST</SharedButton>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test clear theme', () => {
    render(<SharedButton theme={ThemeButton.CLEAR}>TEST</SharedButton>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
