import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import BlueTheme from '../themes/Blue';

import { getMargin } from '../themes/base';

import Container from '../components/Container';
import Background from '../components/Background';
import H1 from '../components/H1';
import H2 from '../components/H2';
import P from '../components/P';

import ctmexCover from '../../assets/pictures/ctmex_cover.jpg';
import ctmexWhite from '../../assets/ctmex_white.svg';

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

const HomePage = () => (
  <BlueTheme>
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
        <Logo src={ctmexWhite} alt="ctmex_white_logo" width="100" />
      </Background>
      <Container>
        <P noMargin>
          El primer colegio de tenis en México basado en un método de enseñanza innovador con
          el cual el niño o niña aprende de acuerdo a su edad, tamaño y fuerza.
          ¡Si aprendemos de mejor manera, jugaremos mejor!
        </P>
      </Container>
    </Fragment>
  </BlueTheme>
);

export default {
  component: HomePage,
};
