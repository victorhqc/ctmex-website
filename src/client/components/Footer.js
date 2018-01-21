import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import { Link } from 'react-router-dom';

import BlackTheme from '../themes/Black';

import {
  getThemeColor,
  getFontSize,
  getMargin,
  getPadding,
} from '../themes/base';

import Row from './Row';
import Column from './Column';
import Container from './Container';

import logo from '../../assets/ctmex_white.svg';

import {
  routes,
} from '../../locales/es/main';

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  font-size: ${getFontSize('md')}em;
  margin: ${getMargin('md')}px 0;

  a {
    color: ${getThemeColor};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const buildRoutes = items => (
  <Ul>
    {map(items, ({ url, label }) => (
      <Li key={url}>
        <Link to={url}>{label}</Link>
      </Li>
    ))}
  </Ul>
);

const Footer = () => (
  <footer>
    <BlackTheme>
      <Container height="30vh" noMargin padding={getPadding('lg')}>
        <Row>
          <Column size={1 / 3}>
            <img src={logo} alt="ctmex white logo" height="100" />
          </Column>
          <Column size={1 / 3}>
            {buildRoutes(routes)}
          </Column>
        </Row>
      </Container>
    </BlackTheme>
  </footer>
);

export default Footer;
