import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import map from 'lodash/map';

import {
  getMargin,
  getFontSize,
  getFontFamily,
} from '../themes/base';

import {
  setColor,
} from '../themes/utils';

import {
  routes,
} from '../../locales/es/main';

const Nav = styled.nav`
  position: absolute;
  top: ${getMargin('md')}px;
  right: ${getMargin('md')}px;
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

const Li = styled.li`
  margin: 0 5px;
`;

const mapItems = items => map(items, item => (
  <Li key={item.url}>{item.label}</Li>
));

const Menu = () => (
  <Nav>
    <Ul>
      {mapItems(routes)}
    </Ul>
  </Nav>
);

export default withRouter(Menu);
