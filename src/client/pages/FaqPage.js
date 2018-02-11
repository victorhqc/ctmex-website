import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import ThemeProvider from '../themes/Provider';

import {
  getMargin,
} from '../themes/base';

import Menu from '../components/Menu';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Helmet from '../components/Helmet';
import H1 from '../components/H1';
import Container from '../components/Container';
import Accordion from '../components/Accordion';

import registrationCover from '../../assets/pictures/faq_cover.jpg';

import {
  TITLE,
  DESCRIPTION,

  WHAT_IS_CTMEX_TITLE,
  WHAT_IS_CTMEX,

  HOW_IS_IT_TITLE,
  HOW_IS_IT,

  WHO_IS_IT_AIMED_AT_TITLE,
  WHO_IS_IT_AIMED_AT,

  HOW_IS_THE_PROGRAM_TITLE,
  HOW_IS_THE_PROGRAM,

  HOW_ARE_THE_LEVELS_TITLE,
  HOW_ARE_THE_LEVELS,

  HOW_IS_EACH_PHASE_TITLE,
  HOW_IS_EACH_PHASE,

  COST_TITLE,
  COST,

  REGISTRATION_INCLUDES_TITLE,
  REGISTRATION_INCLUDES,

  SCHEDULE_TITLE,
  SCHEDULE,

  WHY_CHOOSE_CTMEX_TITLE,
  WHY_CHOOSE_CTMEX,
} from '../../locales/es/faq';

import withRouterPropTypes from '../../constants/propTypes/withRouter';

const Box = styled.div`
  margin-top: ${getMargin('md')};
  margin-bottom: ${getMargin('md')};
`;

const FaqPage = ({ location }) => (
  <section>
    <Helmet
      title={TITLE}
      pathname={location.pathname}
      description={DESCRIPTION}
      src={registrationCover}
    />
    <ThemeProvider color="white">
      <Menu />
    </ThemeProvider>
    <Background
      src={registrationCover}
      height="60vh"
      backgroundPosition="0 25%"
    >
      <Logo />
    </Background>
    <ThemeProvider color="white">
      <Container>
        <H1>{TITLE}</H1>
        <Box>
          <Accordion
            elements={[
              {
                title: WHAT_IS_CTMEX_TITLE,
                description: WHAT_IS_CTMEX,
              },
              {
                title: HOW_IS_IT_TITLE,
                description: HOW_IS_IT,
              },
              {
                title: WHO_IS_IT_AIMED_AT_TITLE,
                description: WHO_IS_IT_AIMED_AT,
              },
              {
                title: HOW_IS_THE_PROGRAM_TITLE,
                description: HOW_IS_THE_PROGRAM,
              },
              {
                title: HOW_ARE_THE_LEVELS_TITLE,
                description: HOW_ARE_THE_LEVELS,
              },
              {
                title: HOW_IS_EACH_PHASE_TITLE,
                description: HOW_IS_EACH_PHASE,
              },
              {
                title: COST_TITLE,
                description: COST,
              },
              {
                title: REGISTRATION_INCLUDES_TITLE,
                description: REGISTRATION_INCLUDES,
              },
              {
                title: SCHEDULE_TITLE,
                description: SCHEDULE,
              },
              {
                title: WHY_CHOOSE_CTMEX_TITLE,
                description: WHY_CHOOSE_CTMEX,
              },
            ]}
          />
        </Box>
      </Container>
    </ThemeProvider>
  </section>
);

FaqPage.propTypes = {
  ...withRouterPropTypes,
};

export default {
  component: withRouter(FaqPage),
};
