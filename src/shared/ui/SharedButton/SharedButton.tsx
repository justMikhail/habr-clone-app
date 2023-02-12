import classNames from "classnames";
import styles from './SharedButton.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear'
}

interface SharedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const SharedButton: FC<SharedButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(styles.SharedButton, className, styles[theme])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
