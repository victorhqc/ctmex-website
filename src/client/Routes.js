import App from './App';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import MethodPage from './pages/MethodPage';
import RegistrationPage from './pages/RegistrationPage';
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
        ...MethodPage,
        path: '/method',
      },
      {
        ...ContactPage,
        path: '/contact',
      },
      {
        ...RegistrationPage,
        path: '/registration',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
