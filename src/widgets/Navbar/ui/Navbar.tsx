import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss'
import {SharedLink, SharedLinkTheme} from "shared/ui/SharedLink/SharedLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.linksList}>
                <SharedLink to={'/'} theme={SharedLinkTheme.SECONDARY}>
                    Home
                </SharedLink>

                <SharedLink to={'/about'} theme={SharedLinkTheme.SECONDARY}>
                    About
                </SharedLink>
            </div>
        </div>
    );
};
