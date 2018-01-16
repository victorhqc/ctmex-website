import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import baseTheme, { getColor } from './base';

const theme = {
  ...baseTheme,
  backgroundColor: getColor('black'),
  color: getColor('white'),
};

const DarkTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {Children.only(children)}
  </ThemeProvider>
);

DarkTheme.defaultProps = {
  children: null,
};

DarkTheme.propTypes = {
  children: PropTypes.element,
};

export default DarkTheme;
