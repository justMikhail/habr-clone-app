import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

const HomePage = () => {
  const { t } = useTranslation('home-page');

  return (
    <div>
      {t('Домашняя')}
      <BugButton />
      <Counter />
    </div>
  );
};

export default HomePage;
