import App from './App';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...ContactPage,
        path: '/contact',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
