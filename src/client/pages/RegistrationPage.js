import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import map from 'lodash/map';

import ThemeProvider from '../themes/Provider';

import {
  getPadding,
  getMargin,
} from '../themes/base';

import {
  setBackground,
  setColor,
} from '../themes/utils';

import Menu from '../components/Menu';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Helmet from '../components/Helmet';
import Container from '../components/Container';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import P from '../components/P';
import Row from '../components/Row';
import DoodleBackground from '../components/DoodleBackground';

import registrationCover from '../../assets/pictures/ctmex_registration.jpg';
import ballBackpackDoodle from '../../assets/doodles/ctmex_ball_backpack.svg';
import raquetTrophyDoodle from '../../assets/doodles/ctmex_raquet_trophy.svg';

import {
  TITLE,
  DESCRIPTION,

  INTRO,
  SCHEDULE,

  FIVE_DAYS_TITLE,
  FIVE_DAYS,

  THREE_DAYS_TITLE,
  THREE_DAYS,

  TWO_DAYS_TITLE,
  TWO_DAYS,
} from '../../locales/es/registration';

import withRouterPropTypes from '../../constants/propTypes/withRouter';

const Column = styled.div`
  position: relative;
  width: ${100 / 3}%;
  padding: ${getPadding('md')}px;
  min-height: 200px;
  ${setColor};
  ${setBackground};
`;

const Box = styled.div`
  margin: ${getMargin('md')}px 0;
`;

const Text = styled.article`
  z-index: 1;
`;

const renderParagraphs = texts => map(texts, text => (
  <P
    lead
    noMargin
    noThemeColor
  >
    {text}
  </P>
));

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
      <Box>
        <Container>
          <H1>{INTRO}</H1>
          <H2>{SCHEDULE}</H2>
          <Row size="sm" gap={`${getMargin('md')}px`}>
            <ThemeProvider color="red">
              <Column>
                <DoodleBackground
                  src={ballBackpackDoodle}
                />
                <Text>
                  <H3 noThemeColor>{FIVE_DAYS_TITLE}</H3>
                  {renderParagraphs(FIVE_DAYS)}
                </Text>
              </Column>
            </ThemeProvider>
            <ThemeProvider color="yellow">
              <Column>
                <DoodleBackground
                  src={raquetTrophyDoodle}
                />
                <H3 noThemeColor>{THREE_DAYS_TITLE}</H3>
                {renderParagraphs(THREE_DAYS)}
              </Column>
            </ThemeProvider>
            <ThemeProvider color="green">
              <Column>
                <DoodleBackground
                  src={ballBackpackDoodle}
                />
                <H3 noThemeColor>{TWO_DAYS_TITLE}</H3>
                {renderParagraphs(TWO_DAYS)}
              </Column>
            </ThemeProvider>
          </Row>
        </Container>
      </Box>
    </ThemeProvider>
  </section>
);

RegistrationPage.propTypes = {
  ...withRouterPropTypes,
};

export default {
  component: withRouter(RegistrationPage),
};
