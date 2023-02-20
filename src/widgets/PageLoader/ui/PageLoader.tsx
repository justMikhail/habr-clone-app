import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.PageLoader, className)}>
      {t('Загрузка')}
    </div>
  );
};
