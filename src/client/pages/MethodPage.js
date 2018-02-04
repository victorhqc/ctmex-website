import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import map from 'lodash/map';

import ThemeProvider from '../themes/Provider';

import Menu from '../components/Menu';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Background from '../components/Background';
import H2 from '../components/H2';
import P from '../components/P';
import Logo from '../components/Logo';

import methodCover from '../../assets/pictures/method_cover.jpg';

import {
  INTRO_TITLE,
  INTRODUCTION,
} from '../../locales/es/method';

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
    <Background src={methodCover} height="60vh">
      <Logo />
    </Background>
    <ThemeProvider color="white">
      <Container>
        <H2>{INTRO_TITLE}</H2>
        <Row>
          <Column size={2 / 3}>
            {map(INTRODUCTION, (value, key) => (
              <P lead key={key}>{value}</P>
            ))}
          </Column>
        </Row>
      </Container>
    </ThemeProvider>
  </Fragment>
);

export default {
  component: MethodPage,
};
