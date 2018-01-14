import React from 'react';
import PropTypes from 'prop-types';
import {
  NOT_FOUND,
} from '../../constants';

const NotFoundPage = ({ staticContext }) => {
  staticContext.set(NOT_FOUND, true);

  return (
    <h1>Oops, route not found.</h1>
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
