import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.NotFoundPage}>
      {t('Страница не найдена')}
    </div>
  );
};
