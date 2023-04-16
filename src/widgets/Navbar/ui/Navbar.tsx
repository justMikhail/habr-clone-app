import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { SharedButton, SharedButtonTheme } from 'shared/ui/SharedButton/SharedButton';
import { useState, useCallback } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const openAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  return (
    <div className={classNames(styles.Navbar, className)}>
      <div className={styles.linksList}>
        <SharedButton
          theme={SharedButtonTheme.CLEAR}
          onClick={openAuthModal}
        >
          {t('Войти')}
        </SharedButton>
      </div>

      <LoginModal
        isOpen={isAuthModal}
        onClose={closeAuthModal}
      />
    </div>
  );
};
