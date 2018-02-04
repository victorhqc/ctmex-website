import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import ThemeProvider from '../themes/Provider';

import {
  getMargin,
  getLineHeight,
} from '../themes/base';

import {
  setVerticalAlign,
  setColor,
  mediaQuery,
} from '../themes/utils';

import Menu from '../components/Menu';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Background from '../components/Background';
import H1 from '../components/H1';
import P from '../components/P';
import Logo from '../components/Logo';
import InformationBox from '../components/InformationBox';
import InfoContainer from '../components/InfoContainer';

import {
  HEADERS_TITLE,
  KEYWORDS,
  WHAT_IS_TITLE,
  WHAT_IS,
  ORIGINS_TITLE,
  ORIGINS,
  SIX_YEARS_TITLE,
  SIX_YEARS,
  SIX_YEARS_2,
  PICTURE_KIDS_RUNNING,
  PICTURE_KIDS_RACKET,
  CTMEX_PICTURE,
} from '../../locales/es/home';

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

const HomePage = () => (
  <Fragment>
    <Helmet>
      <title>ctmex</title>
      <meta property="og:site_name" content="ctmex" />
      <meta property="og:title" content={HEADERS_TITLE} />
      <meta property="og:url" content="http://colegiodetenis.mx" />
      <meta property="og:type" content="website" />
      <meta property="og:author" content="https://github.com/victorhqc" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@colegiotenismx" />
      <meta property="twitter:creator" content="https://github.com/victorhqc" />
      <meta property="twitter:title" content="ctmex" />
      <meta property="twitter:description" content={HEADERS_TITLE} />

      <meta name="description" content={HEADERS_TITLE} />
      <meta
        name="keywords"
        content={KEYWORDS}
      />
    </Helmet>
    <ThemeProvider color="black">
      <Menu />
    </ThemeProvider>
    <Background src={ctmexCover} height="60vh">
      <Logo />
    </Background>
    <InformationBox
      color="red"
      textPosition="left"
      src={kidsRunning}
      alt={PICTURE_KIDS_RUNNING}
      doodleSrc={ballBackpackDoodle}
    >
      <InfoContainer width="70%" marginLeft={60}>
        <H1>{WHAT_IS_TITLE}</H1>
        <P lead>{WHAT_IS}</P>
      </InfoContainer>
    </InformationBox>
    <InformationBox
      color="blue"
      textPosition="right"
      src={kidRaquet}
      alt={PICTURE_KIDS_RACKET}
      doodleSrc={raquetTrophyDoodle}
    >
      <InfoContainer width="70%" marginLeft={60}>
        <H1>{ORIGINS_TITLE}</H1>
        <P lead>{ORIGINS}</P>
      </InfoContainer>
    </InformationBox>
    <ThemeProvider color="white">
      <Gap verticalAlign>
        <Row size="sm">
          <Column size={2 / 5} verticalAlign>
            <Container>
              <img
                width="100%"
                src={imagotipo}
                alt={CTMEX_PICTURE}
              />
            </Container>
          </Column>
          <Column size={3 / 5}>
            <InfoContainer marginLeft={80} width="80%">
              <section>
                <H1>{SIX_YEARS_TITLE}</H1>
                <P lead>{SIX_YEARS}</P>
                <P lead>{SIX_YEARS_2}</P>
              </section>
            </InfoContainer>
          </Column>
        </Row>
      </Gap>
    </ThemeProvider>
  </Fragment>
);

export default {
  component: HomePage,
};
