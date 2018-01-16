import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// import LightTheme from '../themes/Light';
// import DarkTheme from '../themes/Dark';
import RedTheme from '../themes/Red';
import {
  getColor,
  getMargin,
  getSize,
} from '../themes/base';

import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Background from '../components/Background';
// import H1 from '../components/H1';
import H2 from '../components/H2';
import P from '../components/P';

import {
  ABOUT,
  WHAT_IS_TITLE,
  WHAT_IS,
} from '../../locales/es/home';

import ctmexWhite from '../../assets/ctmex_white.svg';
import ctmexCover from '../../assets/pictures/ctmex_cover.jpg';
import kidsRunning from '../../assets/pictures/home_running.jpg';

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

const Gap = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  background: ${getColor('white')};
  text-align: center;
`;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 65%;
  transform: translate3d(-50%, -50px, 0);

  @media (max-width: ${getSize('lg')}px) {
    height: 300px;
  }

  @media (max-width: ${getSize('md')}px) {
    width: 80%;
    height: 300px;
  }

  @media (max-width: ${getSize('xs')}px) {
    left: 0;
    width: 100%;
    transform: translate3d(0, 0, 0);
  }
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
      <Logo src={ctmexWhite} alt="ctmex_white_logo" width="300" />
    </Background>
    <Gap>
      <Box>
        <RedTheme>
          <Container noMargin>
            <Row size="xs">
              <Column size={1 / 3}>
                <Background
                  hide="sm"
                  src={kidsRunning}
                  height="100%"
                />
              </Column>
              <Column size={2 / 3}>
                <Container>
                  <H2>{WHAT_IS_TITLE}</H2>
                  <P lead>{WHAT_IS}</P>
                </Container>
              </Column>
            </Row>
          </Container>
        </RedTheme>
      </Box>
    </Gap>
  </Fragment>
);

export default {
  component: HomePage,
};
