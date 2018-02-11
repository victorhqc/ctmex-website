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

import registrationCover from '../../assets/pictures/ctmex_registration.jpg';

import {
  TITLE,
  DESCRIPTION,
} from '../../locales/es/registration';

import withRouterPropTypes from '../../constants/propTypes/withRouter';

const MethodPage = ({ location }) => (
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
      backgroundPosition="0 65%"
    >
      <Logo />
    </Background>
  </section>
);

MethodPage.propTypes = {
  ...withRouterPropTypes,
};

export default {
  component: withRouter(MethodPage),
};
