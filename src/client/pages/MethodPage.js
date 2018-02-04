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
import H1 from '../components/H1';
import H2 from '../components/H2';
import P from '../components/P';
import Logo from '../components/Logo';
import InfoContainer from '../components/InfoContainer';

import methodCover from '../../assets/pictures/method_cover.jpg';
import yellowTennis from '../../assets/yellow_tennis.svg';
import tennisPhase1 from '../../assets/tennis_phase_1.svg';
import tennisPhase2 from '../../assets/tennis_phase_2.svg';
import tennisPhase3 from '../../assets/tennis_phase_3.svg';

import {
  INTRO_TITLE,
  INTRODUCTION,

  SIX_YEARS_TITLE,
  SIX_YEARS,

  PHASES,

  TABLE_HEADERS,

  PHASE_1_TITLE,
  PHASE_1_BALL,
  PHASE_1_PICTURE,
  PHASE_1_COURT_SIZE,
  PHASE_1_NET,
  PHASE_1_RACKET_SIZE,

  PHASE_2_TITLE,
  PHASE_2_BALL,
  PHASE_2_PICTURE,
  PHASE_2_COURT_SIZE,
  PHASE_2_NET,
  PHASE_2_RACKET_SIZE,

  PHASE_3_TITLE,
  PHASE_3_BALL,
  PHASE_3_PICTURE,
  PHASE_3_COURT_SIZE,
  PHASE_3_NET,
  PHASE_3_RACKET_SIZE,
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

const ColRed = styled.col`
  background-color: ${getColor('carnation')}90;
  color: ${getColor('white')};
`;

const ColYellow = styled.col`
  background-color: ${getColor('seaBuckthorn')}90;
  color: ${getColor('white')};
`;

const ColGreen = styled.col`
  background-color: ${getColor('mountainMeadow')}90;
  color: ${getColor('white')};
`;

const MethodPage = () => (
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
      <Fragment>
        <InfoContainer marginLeft={80} width="80%">
          <article id="six-years">
            <H2>{SIX_YEARS_TITLE}</H2>
            {map(SIX_YEARS, (value, key) => (
              <P lead key={key}>{value}</P>
            ))}
          </article>
        </InfoContainer>
        <InfoContainer marginLeft={80} width="80%">
          <section id="phases">
            <header>
              <H1>{PHASES}</H1>
            </header>
            <table>
              <colgroup>
                <col />
                <ColRed />
                <ColYellow />
                <ColGreen />
              </colgroup>
              <thead>
                <tr>
                  <th>{TABLE_HEADERS.phases}</th>
                  <th>
                    <H2>{PHASE_1_TITLE}</H2>
                  </th>
                  <th>
                    <H2>{PHASE_2_TITLE}</H2>
                  </th>
                  <th>
                    <H2>{PHASE_3_TITLE}</H2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{TABLE_HEADERS.ball}</td>
                  <td>{PHASE_1_BALL}</td>
                  <td>{PHASE_2_BALL}</td>
                  <td>{PHASE_3_BALL}</td>
                </tr>
                <tr>
                  <td>{TABLE_HEADERS.courtSize}</td>
                  <td>
                    <img src={tennisPhase1} alt={PHASE_1_PICTURE} height="250" />
                    <p>{PHASE_1_COURT_SIZE}</p>
                  </td>
                  <td>
                    <img src={tennisPhase2} alt={PHASE_2_PICTURE} height="250" />
                    {map(PHASE_2_COURT_SIZE, (value, key) => (
                      <p key={key}>{value}</p>
                    ))}
                  </td>
                  <td>
                    <img src={tennisPhase3} alt={PHASE_3_PICTURE} height="250" />
                    {map(PHASE_3_COURT_SIZE, (value, key) => (
                      <p key={key}>{value}</p>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td>{TABLE_HEADERS.net}</td>
                  <td>{PHASE_1_NET}</td>
                  <td>{PHASE_2_NET}</td>
                  <td>{PHASE_3_NET}</td>
                </tr>
                <tr>
                  <td>{TABLE_HEADERS.racketSize}</td>
                  <td>{PHASE_1_RACKET_SIZE}</td>
                  <td>{PHASE_2_RACKET_SIZE}</td>
                  <td>{PHASE_3_RACKET_SIZE}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </InfoContainer>
      </Fragment>
    </ThemeProvider>
  </section>
);

export default {
  component: MethodPage,
};
