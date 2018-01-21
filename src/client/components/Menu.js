import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import map from 'lodash/map';

import {
  getMargin,
  getPadding,
  getFontSize,
  getFontFamily,
  getThemeColor,
} from '../themes/base';

import {
  mediaQuery,
  setColor,
} from '../themes/utils';

import {
  routes,
} from '../../locales/es/main';

const Nav = styled.nav`
  position: absolute;
  top: ${getMargin('md')}px;
  right: ${getMargin('md')}px;
  ${mediaQuery('xs', `
    top: ${getMargin('xs')}px;
    right: ${getMargin('xs')}px;
  `)}

  z-index: 1;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: ${getFontFamily('sourceSansPro')};
  font-size: ${getFontSize('md')}em;

  display: flex;
  ${setColor}
`;

const isActive = ({ url, location }) => url === location.pathname;

const getBorderColor = (force = false) => (props) => {
  if (force || isActive(props)) {
    return getThemeColor(props);
  }

  return 'transparent';
};

const Li = styled.li`
  margin: 0 ${getMargin('sm')}px;
  padding: ${getPadding('xs')}px;
  cursor: pointer;
  border: 1px solid ${getBorderColor()};
  border-radius: 3px;

  &:hover {
    border: 1px solid ${getBorderColor(true)}70;
  }

  a {
    text-decoration: none;
    color: ${getThemeColor};
  }
`;

const mapItems = (props, items) => map(items, item => (
  <Li key={item.url} {...props} {...item}>
    <Link to={item.url}>{item.label}</Link>
  </Li>
));

const Menu = props => (
  <Nav>
    <Ul>
      {mapItems(props, routes)}
    </Ul>
  </Nav>
);

export default withRouter(Menu);
