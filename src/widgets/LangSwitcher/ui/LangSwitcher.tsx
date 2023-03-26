import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { SharedButton, SharedButtonTheme } from 'shared/ui/SharedButton/SharedButton';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <SharedButton
      className={classNames(styles.LangSwitcher, className)}
      theme={SharedButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t('Язык')}
    </SharedButton>
  );
};
