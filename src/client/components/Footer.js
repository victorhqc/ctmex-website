import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import { Link } from 'react-router-dom';

import ThemeProvider from '../themes/Provider';

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

import facebook from '../../assets/social/facebook.svg';
import instagram from '../../assets/social/instagram.svg';
import twitter from '../../assets/social/twitter.svg';

import {
  routes,
} from '../../locales/es/main';

import {
  ACTUAL_ADDRESS,
} from '../../locales/es/contact';

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

const buildSocialMedia = () => (
  <Container
    noBackground
    textAlign="center"
    margin={{
      top: getMargin('xl'),
      right: 0,
      left: 0,
      bottom: 0,
    }}
  >
    <Row size="xs">
      <Column size={1 / 3}>
        <a href="https://www.facebook.com/ctmex">
          <img src={facebook} width="40" alt="facebook @ctmex" />
        </a>
      </Column>
      <Column size={1 / 3}>
        <a href="https://twitter.com/colegiotenismx">
          <img src={twitter} width="40" alt="twitter @colegiotenismx" />
        </a>
      </Column>
      <Column size={1 / 3}>
        <a href="https://www.instagram.com/ctmex">
          <img src={instagram} width="40" alt="instagram @ctmex" />
        </a>
      </Column>
    </Row>
  </Container>
);

const Img = styled.img`
  margin-left: ${getMargin('xl')}px;
  margin-top: ${getMargin('xl')}px;
`;

const Address = styled.address`
  margin-top: ${getMargin('xl')}px;
`;

const Footer = () => (
  <footer>
    <ThemeProvider color="black">
      <Container minHeight="30vh" noMargin padding={getPadding('lg')}>
        <Row size="sm">
          <Column size={1 / 3}>
            <Img src={logo} alt="colegio de tenix mexicano" height="100" />
          </Column>
          <Column size={1 / 3}>
            {buildRoutes(routes)}
          </Column>
          <Column size={1 / 3}>
            {buildSocialMedia()}
            <Address>
              {ACTUAL_ADDRESS}
            </Address>
          </Column>
        </Row>
      </Container>
    </ThemeProvider>
  </footer>
);

export default Footer;
