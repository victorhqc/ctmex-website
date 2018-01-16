import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import baseTheme, { getColor } from './base';

const theme = {
  ...baseTheme,
  backgroundColor: getColor('white'),
  color: getColor('black'),
};

const LightTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {Children.only(children)}
  </ThemeProvider>
);

LightTheme.defaultProps = {
  children: null,
};

LightTheme.propTypes = {
  children: PropTypes.element,
};

export default LightTheme;
