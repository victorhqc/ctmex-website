import React from 'react';
import { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import MainTheme from './themes/Main';
import Container from './components/Container';

import Gotham from '../assets/fonts/Gotham-Book.otf';
import GothamItalic from '../assets/fonts/Gotham-BookItalic.otf';
import SourceSansProBlack from '../assets/fonts/Source-sans-pro-black.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'Gotham';
    font-weight: normal;
    font-style: normal;
    src: url(${Gotham}) format("opentype");
  }

  @font-face {
    font-family: 'Gotham';
    font-weight: normal;
    font-style: italic;
    src: url(${GothamItalic}) format("opentype");
  }

  @font-face {
    font-family: 'SourceSansPro';
    font-weight: bold;
    font-style: normal;
    src: url(${SourceSansProBlack}) format("truetype");
  }
`;

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
