import React from 'react';
import PropTypes from 'prop-types';
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
import H1 from '../components/H1';
import H2 from '../components/H2';
import P from '../components/P';
import Logo from '../components/Logo';
import InfoContainer from '../components/InfoContainer';
import MethodMobileTable from '../components/MethodMobileTable';
import MethodTable from '../components/MethodTable';

import onResizeHOC from '../components/HOC/onResize';

import methodCover from '../../assets/pictures/method_cover.jpg';
import yellowTennis from '../../assets/yellow_tennis.svg';

import {
  INTRO_TITLE,
  INTRODUCTION,

  SIX_YEARS_TITLE,
  SIX_YEARS,
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
  margin-bottom: ${getMargin('md')};
`;

const SixyearsArticle = styled.article`
  margin-bottom: ${getMargin('xl')}px;
`;

const MethodPage = ({
  isSm,
}) => (
  <section>
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
    <ThemeProvider color="white">
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
              <InfoContainer width="80%">
                <article id="intro">
                  <H2>{INTRO_TITLE}</H2>
                  {map(INTRODUCTION, (value, key) => (
                    <P lead key={key}>{value}</P>
                  ))}
                </article>
              </InfoContainer>
            </Column>
          </Row>
        </Container>
      </Box>
    </ThemeProvider>
    <ThemeProvider color="white">
      <Box>
        <InfoContainer width="80%">
          <SixyearsArticle id="six-years">
            <H1>{SIX_YEARS_TITLE}</H1>
            {map(SIX_YEARS, (value, key) => (
              <P lead key={key}>{value}</P>
            ))}
          </SixyearsArticle>
        </InfoContainer>
        <Container>
          <section id="phases">
            {isSm ? <MethodMobileTable /> : <MethodTable />}
          </section>
        </Container>
      </Box>
    </ThemeProvider>
  </section>
);

MethodPage.propTypes = {
  isSm: PropTypes.bool.isRequired,
};

export default {
  component: onResizeHOC(MethodPage),
};
