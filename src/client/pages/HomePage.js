import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import DarkTheme from '../themes/Dark';

import Container from '../components/Container';
import H1 from '../components/H1';
import H2 from '../components/H2';

const KEYWORDS = `
tenis, tennis, colegio, mexicano, México, Quéretaro, escuela, clases, tenis mexicano,
colegio de tenis, escuela de tenis, clases de tenis, tenis en mexico,
tennis in mexico, tennis en mexico, tenis queretaro, escuela de tenis en queretaro,
colegio de tenis en queretaro
`;

const HomePage = () => (
  <DarkTheme>
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
      <Container verticalAlign>
        <H1>CTMEX</H1>
        <H2>Colegio de tenis mexicano</H2>
      </Container>
    </Fragment>
  </DarkTheme>
);

export default {
  component: HomePage,
};
