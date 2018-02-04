import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import map from 'lodash/map';

import ThemeProvider from '../themes/Provider';

import {
  getColor,
  getPadding,
  getMargin,
} from '../themes/base';

import {
  mediaQuery,
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

const notATable = `
table, thead, tbody, th, tr, td {
  display: block;
}

tbody {
  display: flex;
  flex-wrap: wrap;
}

/* Hide table headers (but not display: none;, for accessibility) */
thead tr {
  display: none;
}

tr {
  width: 100%;
  border: 1px solid ${getColor('white')};
}

td {
  /* Behave  like a "row" */
  border: none;
  border-bottom: 1px solid ${getColor('white')};
  position: relative;
  width: 60%;
  padding-left: 40%;
}

td:before {
  display: block;
  position: absolute;
  width: 40%;
  left: 0;
}

/*
Label the data
*/

td:nth-of-type(1):before { content: "Étapa"; }
td:nth-of-type(2):before { content: "Pelota"; }
td:nth-of-type(3):before { content: "Tamaño de cancha"; }
td:nth-of-type(4):before { content: "Red"; }
td:nth-of-type(5):before { content: "Tamaño de raqueta"; }
`;

const Table = styled.table`
  color: ${getColor('white')};
  text-align: center;
  font-size: 1.1em;

  td,th {
    padding: ${getPadding('lg')}px;
  }

  th {
    background-color: ${getColor('persianBlue')};
  }

  tr:nth-child(1) {
    background-color: ${getColor('carnation')};
  }
  tr:nth-child(2) {
    background-color: ${getColor('seaBuckthorn')};
  }
  tr:nth-child(3) {
    background-color: ${getColor('mountainMeadow')};
  }

  h2 {
    color: ${getColor('white')};
    margin: 0;
  }

  ${mediaQuery('sm', notATable)}
`;

const SixyearsArticle = styled.article`
  margin-bottom: ${getMargin('xl')}px;
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
          <SixyearsArticle id="six-years">
            <H1>{SIX_YEARS_TITLE}</H1>
            {map(SIX_YEARS, (value, key) => (
              <P lead key={key}>{value}</P>
            ))}
          </SixyearsArticle>
        </InfoContainer>
        <Container>
          <section id="phases">
            <Table>
              <thead>
                <tr>
                  <th><h2>{TABLE_HEADERS.phases}</h2></th>
                  <th><h2>{TABLE_HEADERS.ball}</h2></th>
                  <th><h2>{TABLE_HEADERS.courtSize}</h2></th>
                  <th><h2>{TABLE_HEADERS.net}</h2></th>
                  <th><h2>{TABLE_HEADERS.racketSize}</h2></th>
                </tr>
              </thead>
              <tbody>
                <tr id="phase-1">
                  <td><h2>{PHASE_1_TITLE}</h2></td>
                  <td>{PHASE_1_BALL}</td>
                  <td>
                    <img src={tennisPhase1} alt={PHASE_1_PICTURE} height="250" />
                    {map(PHASE_1_COURT_SIZE, (value, key) => (
                      <p key={key}>{value}</p>
                    ))}
                  </td>
                  <td>{PHASE_1_NET}</td>
                  <td>{PHASE_1_RACKET_SIZE}</td>
                </tr>
                <tr id="phase-2">
                  <td><h2>{PHASE_2_TITLE}</h2></td>
                  <td>{PHASE_2_BALL}</td>
                  <td>
                    <img src={tennisPhase2} alt={PHASE_2_PICTURE} height="250" />
                    {map(PHASE_2_COURT_SIZE, (value, key) => (
                      <p key={key}>{value}</p>
                    ))}
                  </td>
                  <td>{PHASE_2_NET}</td>
                  <td>{PHASE_2_RACKET_SIZE}</td>
                </tr>
                <tr id="phase-3">
                  <td><h2>{PHASE_3_TITLE}</h2></td>
                  <td>{PHASE_3_BALL}</td>
                  <td>
                    <img src={tennisPhase3} alt={PHASE_3_PICTURE} height="250" />
                    {map(PHASE_3_COURT_SIZE, (value, key) => (
                      <p key={key}>{value}</p>
                    ))}
                  </td>
                  <td>{PHASE_3_NET}</td>
                  <td>{PHASE_3_RACKET_SIZE}</td>
                </tr>
              </tbody>
            </Table>
          </section>
        </Container>
      </Fragment>
    </ThemeProvider>
  </section>
);

export default {
  component: MethodPage,
};
