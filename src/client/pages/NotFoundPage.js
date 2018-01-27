import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {
  NOT_FOUND,
} from '../../constants';

import WhiteTheme from '../themes/White';
import Menu from '../components/Menu';
import Container from '../components/Container';

const NotFoundPage = ({ staticContext }) => {
  staticContext.set(NOT_FOUND, true);

  return (
    <Fragment>
      <Helmet>
        <title>ctmex - 404</title>
        <meta property="og:site_name" content="ctmex" />
        <meta property="og:title" content="Colegio de tenis mexicano - 404" />
        <meta property="og:url" content="http://colegiodetenis.mx/404" />
        <meta property="og:type" content="website" />
        <meta property="og:author" content="https://github.com/victorhqc" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@colegiotenismx" />
        <meta property="twitter:creator" content="https://github.com/victorhqc" />
        <meta property="twitter:title" content="ctmex" />
        <meta property="twitter:description" content="Colegio de tenis mexicano" />

        <meta name="description" content="Colegio de tenis mexicano" />
      </Helmet>
      <WhiteTheme>
        <Fragment>
          <Menu />
          <Container height="65vh" verticalAlign>
            <h1>Ups, página no encontrada.</h1>
          </Container>
        </Fragment>
      </WhiteTheme>
    </Fragment>
  );
};

NotFoundPage.defaultProps = {
  staticContext: {
    set: () => {},
  },
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.shape({
    set: PropTypes.func.isRequired,
  }),
};

export default {
  component: NotFoundPage,
};
