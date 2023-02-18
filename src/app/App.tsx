import { Suspense } from 'react';
import classNames from 'classnames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import './styles/styles.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className="page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
