import { Suspense, useState } from 'react';
import classNames from 'classnames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { SharedModal } from 'shared/ui/SharedModal/SharedModal';

const App = () => {
  const { theme } = useTheme();

  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={classNames('app')}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={() => setIsOpened(true)}>
          toggle
        </button>
        <SharedModal isOpened={isOpened} onClose={() => setIsOpened(false)}>
          asfasdasdasdasdas
        </SharedModal>
        <div className="page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
