import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const HomePage = () => {
  const { t } = useTranslation('home-page');

  return (
    <div>
      {t('Домашняя')}
      <BugButton />
    </div>
  );
};

export default HomePage;
