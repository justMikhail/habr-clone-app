import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './SharedButton.module.scss';

export enum SharedButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BG = 'background',
    BG_INVERTED = 'backgroundInverted',
}

export enum SharedButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export enum SharedButtonShape {
  SQUARE = 'square',
}

interface SharedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: SharedButtonTheme;
    shape?: SharedButtonShape;
    size?: SharedButtonSize;
}

export const SharedButton: FC<SharedButtonProps> = (props) => {
  const {
    className,
    theme,
    shape,
    size,
    disabled,
    children,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(
        styles.SharedButton,
        className,
        styles[theme],
        styles[shape],
        styles[size],
        { [styles.disabled]: disabled },
      )}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
