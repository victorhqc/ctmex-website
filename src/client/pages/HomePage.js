import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import WhiteTheme from '../themes/White';
import BlackTheme from '../themes/Black';
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

import Menu from '../components/Menu';
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
  KEYWORDS,
  WHAT_IS_TITLE,
  WHAT_IS,
  REGISTRATION,
  SIX_YEARS_TITLE,
  SIX_YEARS,
  SIX_YEARS_2,
} from '../../locales/es/home';

import logo from '../../assets/ctmex.svg';
import imagotipo from '../../assets/ctmex_imagotipo.svg';
import ctmexCover from '../../assets/pictures/ctmex_cover.jpg';
import kidsRunning from '../../assets/pictures/home_running.jpg';
import catching from '../../assets/pictures/home_catching.jpg';
import ballBackpackDoodle from '../../assets/doodles/ctmex_ball_backpack.svg';
import raquetTrophyDoodle from '../../assets/doodles/ctmex_raquet_trophy.svg';

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
    min-height: 500px;
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
    <BlackTheme>
      <Menu />
    </BlackTheme>
    <Background src={ctmexCover} height="60vh">
      <Logo src={logo} alt="ctmex logo" width="150" />
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
                <section>
                  <H2>{WHAT_IS_TITLE}</H2>
                  <P lead>{WHAT_IS}</P>
                </section>
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
                <section>
                  <H2>{REGISTRATION}</H2>
                </section>
              </Column>
              <Column size={2 / 7}>
                <img src={catching} width="100%" alt="niño con pelotas de tenis" />
              </Column>
            </Row>
          </Container>
        </BlueTheme>
      </Box>
    </Wrapper>
    <WhiteTheme>
      <Gap verticalAlign>
        <Row size="sm">
          <Column size={2 / 5} verticalAlign>
            <Container>
              <img
                width="100%"
                src={imagotipo}
                alt="ctmex imagotipo"
              />
            </Container>
          </Column>
          <Column size={3 / 5}>
            <Container textAlign="right">
              <section>
                <H1>{SIX_YEARS_TITLE}</H1>
                <P lead>{SIX_YEARS}</P>
                <P lead>{SIX_YEARS_2}</P>
              </section>
            </Container>
          </Column>
        </Row>
      </Gap>
    </WhiteTheme>
  </Fragment>
);

export default {
  component: HomePage,
};
