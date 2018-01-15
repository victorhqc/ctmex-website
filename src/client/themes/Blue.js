import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import baseTheme from './base';

const theme = {
  ...baseTheme,
  backgroundColor: baseTheme.COLORS.persianBlue,
  color: baseTheme.COLORS.white,
};

const BlueTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {Children.only(children)}
  </ThemeProvider>
);

BlueTheme.defaultProps = {
  children: null,
};

BlueTheme.propTypes = {
  children: PropTypes.element,
};

export default BlueTheme;
