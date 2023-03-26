import classNames from 'classnames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark-icon.svg';
import LightIcon from 'shared/assets/icons/theme-light-icon.svg';
import { SharedButton, SharedButtonTheme } from 'shared/ui/SharedButton/SharedButton';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SharedButton
      theme={SharedButtonTheme.CLEAR}
      className={classNames(styles.ThemeSwitcher, className)}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK
        ? <DarkIcon />
        : <LightIcon />}
    </SharedButton>
  );
};
