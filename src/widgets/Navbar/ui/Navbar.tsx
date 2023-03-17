import classNames from 'classnames';
import { SharedLink, SharedLinkTheme } from 'shared/ui/SharedLink/SharedLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(styles.Navbar, className)}>
    <div className={styles.linksList}>
      <SharedLink
        to="/"
        theme={SharedLinkTheme.SECONDARY}
      >
        Home
      </SharedLink>

      <SharedLink
        to="/about"
        theme={SharedLinkTheme.SECONDARY}
      >
        About
      </SharedLink>
    </div>
  </div>
);
