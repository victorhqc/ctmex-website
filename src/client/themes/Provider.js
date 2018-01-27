import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import baseTheme, { getColor } from './base';

const themeColor = (color) => {
  switch (color) {
    case 'blue':
      return {
        backgroundColor: getColor('persianBlue'),
        color: getColor('white'),
      };

    case 'red':
      return {
        backgroundColor: getColor('carnation'),
        color: getColor('white'),
      };

    case 'green':
      return {
        backgroundColor: getColor('mountainMeadow'),
        color: getColor('white'),
      };

    case 'black':
      return {
        backgroundColor: getColor('black'),
        color: getColor('white'),
      };

    case 'white':
      return {
        backgroundColor: getColor('white'),
        color: getColor('black'),
      };

    default:
      return {};
  }
};

const ThemeProvider = ({ children, color }) => (
  <StyledThemeProvider
    theme={{
      ...baseTheme,
      ...themeColor(color),
    }}
  >
    {Children.only(children)}
  </StyledThemeProvider>
);

ThemeProvider.defaultProps = {
  color: '',
};

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string,
};

export default ThemeProvider;
