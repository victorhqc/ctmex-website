import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import baseTheme, { getColor } from './base';

const theme = {
  ...baseTheme,
  backgroundColor: getColor('carnation'),
  color: getColor('white'),
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
