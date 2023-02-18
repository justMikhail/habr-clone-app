import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Домашняя')}
    </div>
  );
};

export default HomePage;
