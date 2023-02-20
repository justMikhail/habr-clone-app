import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { SharedButton } from 'shared/ui/SharedButton/SharedButton';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(styles.PageError, className)}>
      <p>{t('Непредвиденная ошибка')}</p>
      <SharedButton onClick={reloadPage}>
        {t('Обновите страницу')}
      </SharedButton>
    </div>
  );
};
