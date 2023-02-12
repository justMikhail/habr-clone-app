import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import styles from './SharedLink.module.scss'

export enum SharedLinkTheme {
    PRIMARY= 'primary',
    SECONDARY = 'secondary',
}

interface SharedLinkProps extends LinkProps {
    className?: string;
    theme?: SharedLinkTheme
}

export const SharedLink: FC<SharedLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = SharedLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.SharedLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
