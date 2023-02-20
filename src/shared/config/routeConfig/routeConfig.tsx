import { RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFaoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.not_found,
    element: <NotFoundPage />,
  },
};
