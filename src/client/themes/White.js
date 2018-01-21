import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import baseTheme, { getColor } from './base';

const theme = {
  ...baseTheme,
  backgroundColor: getColor('white'),
  color: getColor('black'),
};

const whiteTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {Children.only(children)}
  </ThemeProvider>
);

whiteTheme.defaultProps = {
  children: null,
};

whiteTheme.propTypes = {
  children: PropTypes.element,
};

export default whiteTheme;
