import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  NOT_FOUND,
} from '../../constants';

import ThemeProvider from '../themes/Provider';
import Menu from '../components/Menu';
import Container from '../components/Container';
import Helmet from '../components/Helmet';

import withRouterPropTypes from '../../constants/propTypes/withRouter';

const NotFoundPage = ({ staticContext }) => {
  staticContext.set(NOT_FOUND, true);

  return (
    <Fragment>
      <Helmet
        title="404"
        pathname="404"
        description="Ups, página no encontrada."
      />
      <ThemeProvider color="white">
        <Fragment>
          <Menu />
          <Container height="65vh" verticalAlign>
            <h1>Ups, página no encontrada.</h1>
          </Container>
        </Fragment>
      </ThemeProvider>
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
  ...withRouterPropTypes,
};

export default {
  component: NotFoundPage,
};
