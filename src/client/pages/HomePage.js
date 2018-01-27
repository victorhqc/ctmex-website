import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import ThemeProvider from '../themes/Provider';

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
import Logo from '../components/Logo';
import InformationBox from '../components/InformationBox';

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

import imagotipo from '../../assets/ctmex_imagotipo.svg';
import ctmexCover from '../../assets/pictures/ctmex_cover.jpg';
import kidsRunning from '../../assets/pictures/home_running.jpg';
import catching from '../../assets/pictures/home_catching.jpg';
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
    <ThemeProvider color="black">
      <Menu />
    </ThemeProvider>
    <Background src={ctmexCover} height="60vh">
      <Logo />
    </Background>
    <InformationBox
      color="red"
      textPosition="right"
      src={kidsRunning}
      alt="niños corriendo"
      doodleSrc={ballBackpackDoodle}
    >
      <Fragment>
        <H2>{WHAT_IS_TITLE}</H2>
        <P lead>{WHAT_IS}</P>
      </Fragment>
    </InformationBox>
    <InformationBox
      color="blue"
      textPosition="left"
      src={catching}
      alt="niño con pelotas de tenis"
      doodleSrc={raquetTrophyDoodle}
    >
      <H2>{REGISTRATION}</H2>
    </InformationBox>
    <ThemeProvider color="white">
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
    </ThemeProvider>
  </Fragment>
);

export default {
  component: HomePage,
};
