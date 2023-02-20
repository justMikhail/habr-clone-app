import { useEffect, useState } from 'react';
import { SharedButton } from 'shared/ui/SharedButton/SharedButton';
import { useTranslation } from 'react-i18next';

// компонент для тестирования
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <SharedButton onClick={handleClick}>
      {t('Bug Button')}
    </SharedButton>
  );
};
