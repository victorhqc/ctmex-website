import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import DarkTheme from '../themes/Dark';

import Container from '../components/Container';
import H1 from '../components/H1';
import H2 from '../components/H2';

const HomePage = () => (
  <DarkTheme>
    <Fragment>
      <Helmet>
        <title>Colegio de tenis mexicano</title>
        <meta property="og:site_name" content="ctmex" />
        <meta
          property="og:title"
          content="Colegio de tenis mexicano"
        />
        <meta property="og:url" content="http://victorhqc.com" />
        <meta property="og:type" content="website" />
        <meta property="og:author" content="https://github.com/victorhqc" />

        {/* <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@victorhqc" />
        <meta property="twitter:creator" content="https://github.com/victorhqc" />
        <meta property="twitter:title" content="victorhqc" />
        <meta property="twitter:description" content="Colegio de tenis mexicano" /> */}

        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content="tenis, colegio, mexicano, escuela, clases"
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
