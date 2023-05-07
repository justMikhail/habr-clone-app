import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { getUserAuthData, userActions } from 'entities/User';
import { SharedButton, SharedButtonTheme } from 'shared/ui/SharedButton/SharedButton';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const closeAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const openAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.Navbar, className)}>
        <div className={styles.linksList}>
          <SharedButton
            theme={SharedButtonTheme.CLEAR}
            onClick={onLogout}
          >
            {t('Выйти')}
          </SharedButton>
        </div>
      </div>
    );
  }

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
