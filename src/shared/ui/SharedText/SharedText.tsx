import classNames from 'classnames';
import styles from './SharedText.module.scss';

export enum SharedTextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: SharedTextTheme;
}

export const SharedText = (props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = SharedTextTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames(styles.Text, { [styles[theme]]: true }, className)}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
