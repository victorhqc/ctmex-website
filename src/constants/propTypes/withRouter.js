import PropTypes from 'prop-types';

export default {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
