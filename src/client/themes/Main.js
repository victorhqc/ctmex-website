import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import baseTheme from './base';

const theme = {
  ...baseTheme,
};

const MainTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {Children.only(children)}
  </ThemeProvider>
);

MainTheme.defaultProps = {
  children: null,
};

MainTheme.propTypes = {
  children: PropTypes.element,
};

export default MainTheme;
