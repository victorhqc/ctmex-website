import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import ThemeProvider from '../themes/Provider';

import {
  setVerticalAlign,
} from '../themes/utils';

import Menu from '../components/Menu';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Background from '../components/Background';
import H2 from '../components/H2';
import P from '../components/P';
import Logo from '../components/Logo';
import InformationBox from '../components/InformationBox';
import InfoContainer from '../components/InfoContainer';
import Helmet from '../components/Helmet';

import {
  DESCRIPTION,
  WHAT_IS_TITLE,
  WHAT_IS,
  ORIGINS_TITLE,
  ORIGINS,
  PICTURE_KIDS_RUNNING,
  PICTURE_KIDS_RACKET,
  CTMEX_PICTURE,
  WHY_TITLE,
  WHY,
} from '../../locales/es/home';

import withRouterPropTypes from '../../constants/propTypes/withRouter';

import imagotipo from '../../assets/ctmex_imagotipo.svg';
import ctmexCover from '../../assets/pictures/ctmex_cover.jpg';
import kidsRunning from '../../assets/pictures/home_running.jpg';
import kidRaquet from '../../assets/pictures/home_kid_racket.jpg';
import ballBackpackDoodle from '../../assets/doodles/ctmex_ball_backpack.svg';
import raquetTrophyDoodle from '../../assets/doodles/ctmex_raquet_trophy.svg';

const Gap = styled.div`
    width: 100%;
    min-height: 500px;
    ${setVerticalAlign}
`;

const HomePage = ({ location }) => (
  <section>
    <Helmet
      pathname={location.pathname}
      description={DESCRIPTION}
      src={ctmexCover}
    />
    <ThemeProvider color="white">
      <Menu />
    </ThemeProvider>
    <Background
      src={ctmexCover}
      height="60vh"
      backgroundPosition="0 25%"
    >
      <Logo />
    </Background>
    <Fragment>
      <InformationBox
        color="red"
        textPosition="left"
        src={kidsRunning}
        alt={PICTURE_KIDS_RUNNING}
        doodleSrc={ballBackpackDoodle}
      >
        <InfoContainer width="70%">
          <article id="what-is">
            <H2>{WHAT_IS_TITLE}</H2>
            <P lead>{WHAT_IS}</P>
          </article>
        </InfoContainer>
      </InformationBox>
      <InformationBox
        color="blue"
        textPosition="right"
        src={kidRaquet}
        alt={PICTURE_KIDS_RACKET}
        doodleSrc={raquetTrophyDoodle}
      >
        <InfoContainer width="70%">
          <article id="origins">
            <H2>{ORIGINS_TITLE}</H2>
            <P lead>{ORIGINS}</P>
          </article>
        </InfoContainer>
      </InformationBox>
      <ThemeProvider color="white">
        <Gap verticalAlign>
          <Row size="sm">
            <Column size={3 / 4}>
              <InfoContainer width="90%">
                <H2>{WHY_TITLE}</H2>
                <P lead>{WHY}</P>
              </InfoContainer>
            </Column>
            <Column size={1 / 4} verticalAlign>
              <Container>
                <img
                  width="100%"
                  src={imagotipo}
                  alt={CTMEX_PICTURE}
                />
              </Container>
            </Column>
          </Row>
        </Gap>
      </ThemeProvider>
    </Fragment>
  </section>
);

HomePage.propTypes = {
  ...withRouterPropTypes,
};

export default {
  component: withRouter(HomePage),
};
