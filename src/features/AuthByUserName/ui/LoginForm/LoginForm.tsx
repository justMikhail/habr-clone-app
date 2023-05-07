import { memo, useCallback } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { SharedButton, SharedButtonTheme } from 'shared/ui/SharedButton/SharedButton';
import { SharedInput } from 'shared/ui/SharedInput/SharedInput';
import { SharedText, SharedTextTheme } from 'shared/ui/SharedText/SharedText';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/services/loginByUsername/loginByUserName';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const {
    username,
    password,
    error,
    isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.LoginForm, className)}>
      <SharedText title={t('Форма авторизации')} />

      {error && <SharedText text={t('Вы ввели неверный логин или пароль')} theme={SharedTextTheme.ERROR} />}

      <SharedInput
        autofocus
        type="text"
        className={styles.input}
        placeholder={t('Введите имя')}
        onChange={onChangeUsername}
        value={username}
      />

      <SharedInput
        type="text"
        className={styles.input}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />

      <SharedButton
        className={styles.loginBtn}
        theme={SharedButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </SharedButton>
    </div>
  );
});
