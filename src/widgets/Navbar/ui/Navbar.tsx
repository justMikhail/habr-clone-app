import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { SharedButton, SharedButtonTheme } from 'shared/ui/SharedButton/SharedButton';
import { useState, useCallback } from 'react';
import { SharedModal } from 'shared/ui/SharedModal/SharedModal';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleToggleModal = useCallback(
    () => {
      setIsAuthModal((prev) => !prev);
    },
    [],
  );

  return (
    <div className={classNames(styles.Navbar, className)}>
      <div className={styles.linksList}>
        <SharedButton
          theme={SharedButtonTheme.CLEAR}
          onClick={handleToggleModal}
        >
          {t('Войти')}
        </SharedButton>
      </div>

      <SharedModal
        isOpened={isAuthModal}
        onClose={handleToggleModal}
      >
        AUTH FORM
      </SharedModal>
    </div>
  );
};
