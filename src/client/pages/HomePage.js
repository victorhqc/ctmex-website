import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import LightTheme from '../themes/Light';
// import DarkTheme from '../themes/Dark';
import RedTheme from '../themes/Red';
import BlueTheme from '../themes/Blue';
import {
  getColor,
  getMargin,
  // getSize,
} from '../themes/base';
import {
  setVerticalAlign,
} from '../themes/utils';

import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Background from '../components/Background';
import H1 from '../components/H1';
import H2 from '../components/H2';
import P from '../components/P';
import DoodleBackground from '../components/DoodleBackground';

import {
  // ABOUT,
  WHAT_IS_TITLE,
  WHAT_IS,
  REGISTRATION,
  SIX_YEARS_TITLE,
  SIX_YEARS,
  SIX_YEARS_2,
} from '../../locales/es/home';

import ctmexWhite from '../../assets/ctmex_white.svg';
import ctmexCover from '../../assets/pictures/ctmex_cover.jpg';
import kidsRunning from '../../assets/pictures/home_running.jpg';
import catching from '../../assets/pictures/home_catching.jpg';
import ballBackpackDoodle from '../../assets/doodles/ctmex_ball_backpack.svg';
import raquetTrophyDoodle from '../../assets/doodles/ctmex_raquet_trophy.svg';

const KEYWORDS = `
tenis, tennis, colegio, mexicano, México, Quéretaro, escuela, clases, tenis mexicano,
colegio de tenis, escuela de tenis, clases de tenis, tenis en mexico,
tennis in mexico, tennis en mexico, tenis queretaro, escuela de tenis en queretaro,
colegio de tenis en queretaro
`;

const margin = getMargin('md');

const Logo = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate3d(${margin}px, -${margin}px, 0);
`;

const Wrapper = styled.div`
  background: ${getColor('white')};
  text-align: center;
`;

const Box = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  width: calc(100% - 20px);
`;

const Gap = styled.div`
    width: 100%;
    height: 500px;
    ${setVerticalAlign}
`;

const HomePage = () => (
  <Fragment>
    <Helmet>
      <title>ctmex</title>
      <meta property="og:site_name" content="ctmex" />
      <meta property="og:title" content="Colegio de tenis mexicano" />
      <meta property="og:url" content="http://colegiodetenis.mx" />
      <meta property="og:type" content="website" />
      <meta property="og:author" content="https://github.com/victorhqc" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@colegiotenismx" />
      <meta property="twitter:creator" content="https://github.com/victorhqc" />
      <meta property="twitter:title" content="ctmex" />
      <meta property="twitter:description" content="Colegio de tenis mexicano" />

      <meta name="description" content="Colegio de tenis mexicano" />
      <meta
        name="keywords"
        content={KEYWORDS}
      />
    </Helmet>
    <Background src={ctmexCover} height="60vh">
      <Logo src={ctmexWhite} alt="ctmex_white_logo" width="150" />
    </Background>
    <Wrapper>
      <Box>
        <RedTheme>
          <Container noMargin background="transparent" zIndex={1}>
            <DoodleBackground src={ballBackpackDoodle} />
            <Row size="xs">
              <Column size={1 / 3}>
                <img src={kidsRunning} width="100%" alt="niños corriendo" />
              </Column>
              <Column size={2 / 3}>
                <H2>{WHAT_IS_TITLE}</H2>
                <P lead>{WHAT_IS}</P>
              </Column>
            </Row>
          </Container>
        </RedTheme>
      </Box>
    </Wrapper>
    <Wrapper>
      <Box>
        <BlueTheme>
          <Container noMargin background="transparent" zIndex={1}>
            <DoodleBackground src={raquetTrophyDoodle} />
            <Row size="xs">
              <Column size={5 / 7}>
                <H2>{REGISTRATION}</H2>
              </Column>
              <Column size={2 / 7}>
                <img src={catching} width="100%" alt="niño con pelotas de tenis" />
              </Column>
            </Row>
          </Container>
        </BlueTheme>
      </Box>
    </Wrapper>
    <LightTheme>
      <Gap verticalAlign>
        <Container>
          <H1>{SIX_YEARS_TITLE}</H1>
          <P>{SIX_YEARS}</P>
          <P>{SIX_YEARS_2}</P>
        </Container>
      </Gap>
    </LightTheme>
  </Fragment>
);

export default {
  component: HomePage,
};
