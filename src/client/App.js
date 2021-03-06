import React, { Fragment } from 'react';
import { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import ThemeProvider from './themes/Provider';
import Container from './components/Container';
import Footer from './components/Footer';

import Gotham from '../assets/fonts/Gotham-Light.woff';
import SourceSansProBlack from '../assets/fonts/Source-sans-pro-black.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'Gotham';
    font-weight: normal;
    font-style: normal;
    src: url(${Gotham}) format('woff');
  }

  @font-face {
    font-family: 'SourceSansPro';
    font-weight: bold;
    font-style: normal;
    src: url(${SourceSansProBlack}) format('truetype');
  }
`;

const App = ({ route }) => (
  <ThemeProvider>
    <Fragment>
      <Container
        noPadding
        noMargin
      >
        {renderRoutes(route.routes)}
      </Container>
      <Footer />
    </Fragment>
  </ThemeProvider>
);

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
};

export default {
  component: App,
};
