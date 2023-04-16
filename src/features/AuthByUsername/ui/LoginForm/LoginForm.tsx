import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { SharedButton } from 'shared/ui/SharedButton/SharedButton';
import { SharedInput } from 'shared/ui/SharedInput/SharedInput';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, className)}>
      <SharedInput
        autofocus
        type="text"
        className={styles.input}
        placeholder={t('Введите имя')}
      />

      <SharedInput
        type="text"
        className={styles.input}
        placeholder={t('Введите пароль')}
      />

      <SharedButton className={styles.loginBtn}>
        {t('Войти')}
      </SharedButton>
    </div>
  );
};
