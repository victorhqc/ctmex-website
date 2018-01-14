import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import MainTheme from './themes/Main';
import Container from './components/Container';

const App = ({ route }) => (
  <MainTheme>
    <Container
      noPadding
      noMargin
    >
      {renderRoutes(route.routes)}
    </Container>
  </MainTheme>
);

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
};

export default {
  component: App,
};
