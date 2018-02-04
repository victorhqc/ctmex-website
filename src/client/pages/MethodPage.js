import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import map from 'lodash/map';

import ThemeProvider from '../themes/Provider';

import {
  getColor,
  getMargin,
} from '../themes/base';

import Menu from '../components/Menu';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Background from '../components/Background';
import H2 from '../components/H2';
import P from '../components/P';
import Logo from '../components/Logo';
import InfoContainer from '../components/InfoContainer';

import methodCover from '../../assets/pictures/method_cover.jpg';
import yellowTennis from '../../assets/yellow_tennis.svg';

import {
  INTRO_TITLE,
  INTRODUCTION,
} from '../../locales/es/method';

const TennisDoodle = styled.div`
  background-image: url(${yellowTennis});
  background-color: ${getColor('seaBuckthorn')};
  background-size: auto 100%;
  background-repeat: no-repeat;

  position: absolute;
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  margin-top: ${getMargin('md')};
`;

const MethodPage = () => (
  <Fragment>
    <Helmet>
      <title>ctmex - Método</title>
      <meta property="og:site_name" content="ctmex" />
      <meta property="og:title" content="Método del Colegio de tenis mexicano" />
      <meta property="og:url" content="http://colegiodetenis.mx/method" />
      <meta property="og:type" content="website" />
      <meta property="og:author" content="https://github.com/victorhqc" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@colegiotenismx" />
      <meta property="twitter:creator" content="https://github.com/victorhqc" />
      <meta property="twitter:title" content="ctmex" />
      <meta property="twitter:description" content="Método del Colegio de tenis mexicano" />

      <meta name="description" content="Método del Colegio de tenis mexicano" />
    </Helmet>
    <ThemeProvider color="black">
      <Menu />
    </ThemeProvider>
    <Background
      src={methodCover}
      height="60vh"
      backgroundPosition="0 65%"
    >
      <Logo />
    </Background>
    <ThemeProvider color="yellow">
      <Box>
        <Container noMargin noPadding>
          <Row>
            <Column size={2 / 5}>
              <TennisDoodle />
            </Column>
            <Column size={3 / 5}>
              <InfoContainer marginLeft={80} width="80%">
                <H2>{INTRO_TITLE}</H2>
                {map(INTRODUCTION, (value, key) => (
                  <P lead key={key}>{value}</P>
                ))}
              </InfoContainer>
            </Column>
          </Row>
        </Container>
      </Box>
    </ThemeProvider>
  </Fragment>
);

export default {
  component: MethodPage,
};
