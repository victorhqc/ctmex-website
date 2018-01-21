import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import baseTheme, { getColor } from './base';

const theme = {
  ...baseTheme,
  backgroundColor: getColor('black'),
  color: getColor('white'),
};

const Black = ({ children }) => (
  <ThemeProvider theme={theme}>
    {Children.only(children)}
  </ThemeProvider>
);

Black.defaultProps = {
  children: null,
};

Black.propTypes = {
  children: PropTypes.element,
};

export default Black;
