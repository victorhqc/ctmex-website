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
import Container from '../components/Container';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import P from '../components/P';

import registrationCover from '../../assets/pictures/ctmex_registration.jpg';

import {
  TITLE,
  DESCRIPTION,

  INTRO,
  SCHEDULE,

  FIVE_DAYS_TITLE,
  FIVE_DAYS,

  THREE_DAYS_TITLE,
  THREE_DAYS,

  SATURDAYS_TITLE,
  SATURDAYS,
} from '../../locales/es/registration';

import withRouterPropTypes from '../../constants/propTypes/withRouter';

const RegistrationPage = ({ location }) => (
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
    <ThemeProvider color="white">
      <Container>
        <H1>{INTRO}</H1>
        <H2>{SCHEDULE}</H2>

        <H3>{FIVE_DAYS_TITLE}</H3>
        <P lead>{FIVE_DAYS}</P>

        <H3>{THREE_DAYS_TITLE}</H3>
        <P lead>{THREE_DAYS}</P>

        <H3>{SATURDAYS_TITLE}</H3>
        <P lead>{SATURDAYS}</P>
      </Container>
    </ThemeProvider>
  </section>
);

RegistrationPage.propTypes = {
  ...withRouterPropTypes,
};

export default {
  component: withRouter(RegistrationPage),
};
