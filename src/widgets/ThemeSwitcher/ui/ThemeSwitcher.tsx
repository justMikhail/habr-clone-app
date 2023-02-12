import classNames from "classnames";
import styles from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            onClick={toggleTheme}
        >
            Switcher
        </button>
    );
};
