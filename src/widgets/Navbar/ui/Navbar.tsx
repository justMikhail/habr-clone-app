import classNames from "classnames";
import styles from './Navbar.module.scss'
import {SharedLink, SharedLinkTheme} from "shared/ui/SharedLink/SharedLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, className)}>
            <ThemeSwitcher />

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
