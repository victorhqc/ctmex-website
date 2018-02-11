import React from 'react';
import { withRouter } from 'react-router';
// import styled from 'styled-components';

import ThemeProvider from '../themes/Provider';

// import {
//   getColor,
//   getMargin,
// } from '../themes/base';

import Menu from '../components/Menu';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Helmet from '../components/Helmet';

import registrationCover from '../../assets/pictures/faq_cover.jpg';

import {
  TITLE,
  DESCRIPTION,
} from '../../locales/es/faq';

import withRouterPropTypes from '../../constants/propTypes/withRouter';

const FaqPage = ({ location }) => (
  <section>
    <Helmet
      title={TITLE}
      pathname={location.pathname}
      description={DESCRIPTION}
      src={registrationCover}
    />
    <ThemeProvider color="white">
      <Menu />
    </ThemeProvider>
    <Background
      src={registrationCover}
      height="60vh"
      backgroundPosition="0 25%"
    >
      <Logo />
    </Background>
  </section>
);

FaqPage.propTypes = {
  ...withRouterPropTypes,
};

export default {
  component: withRouter(FaqPage),
};
