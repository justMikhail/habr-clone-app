import { render, screen } from '@testing-library/react';
import { SharedButton, SharedButtonTheme } from 'shared/ui/SharedButton/SharedButton';

describe('SharedButton', () => {
  test('Test render', () => {
    render(<SharedButton>TEST</SharedButton>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test clear theme', () => {
    render(<SharedButton theme={SharedButtonTheme.CLEAR}>TEST</SharedButton>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
