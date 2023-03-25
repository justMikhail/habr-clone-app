import classNames from 'classnames';
import { SharedLink, SharedLinkTheme } from 'shared/ui/SharedLink/SharedLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.Navbar, className)}>
      <div className={styles.linksList}>
        <SharedLink
          to="/"
          theme={SharedLinkTheme.SECONDARY}
        >
          {t('Домашняя')}
        </SharedLink>

        <SharedLink
          to="/about"
          theme={SharedLinkTheme.SECONDARY}
        >
          {t('О сайте')}
        </SharedLink>
      </div>
    </div>
  );
};
