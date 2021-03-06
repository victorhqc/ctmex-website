import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import map from 'lodash/map';
import compose from 'lodash/fp/compose';

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
import Helmet from '../components/Helmet';

import onResizeHOC from '../components/HOC/onResize';

import methodCover from '../../assets/pictures/method_cover.jpg';
import yellowTennis from '../../assets/yellow_tennis.svg';
import blueTennis from '../../assets/blue_tennis.svg';

import {
  TITLE,
  DESCRIPTION,

  INTRO_TITLE,
  INTRODUCTION,

  SIX_YEARS_TITLE,
  SIX_YEARS,

  CLASSES_TITLE,
  CLASSES,
} from '../../locales/es/method';

import withRouterPropTypes from '../../constants/propTypes/withRouter';

const YellowTennisDoodle = styled.div`
  background-image: url(${yellowTennis});
  background-color: ${getColor('seaBuckthorn')};
  background-size: auto 100%;
  background-repeat: no-repeat;

  position: absolute;
  width: 100%;
  height: 100%;
`;

const BlueTennisDoodle = styled.div`
  background-image: url(${blueTennis});
  background-color: ${getColor('persianBlue')};
  background-size: auto 100%;
  background-repeat: no-repeat;
  transform: scaleX(-1);
  filter: FlipH;

  position: absolute;
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  margin-top: ${getMargin('md')}px;
  margin-bottom: ${getMargin('md')}px;
`;

const SixyearsArticle = styled.article`
  margin-bottom: ${getMargin('xl')}px;
`;

const MethodPage = ({
  isSm,
  location,
}) => (
  <section>
    <Helmet
      title={TITLE}
      pathname={location.pathname}
      description={DESCRIPTION}
      src={methodCover}
    />
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
              <YellowTennisDoodle />
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
    <ThemeProvider color="blue">
      <Box>
        <Container noMargin noPadding>
          <Row>
            <Column size={3 / 4}>
              <InfoContainer width="80%">
                <article id="intro">
                  <H2>{CLASSES_TITLE}</H2>
                  {map(CLASSES, (value, key) => (
                    <P lead key={key}>{value}</P>
                  ))}
                </article>
              </InfoContainer>
            </Column>
            <Column size={1 / 4}>
              <BlueTennisDoodle />
            </Column>
          </Row>
        </Container>
      </Box>
    </ThemeProvider>
  </section>
);

MethodPage.propTypes = {
  isSm: PropTypes.bool.isRequired,
  ...withRouterPropTypes,
};

export default {
  component: compose(
    onResizeHOC,
    withRouter,
  )(MethodPage),
};
