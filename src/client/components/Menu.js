/* eslint react/no-did-mount-set-state: 0 */

import React, { Fragment, Component } from 'react';
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
  getSize,
} from '../themes/base';

import {
  mediaQuery,
  setColor,
} from '../themes/utils';

import WhiteTheme from '../themes/White';

import {
  routes,
} from '../../locales/es/main';

import {
  getScreenSize,
} from '../utils/html';

const sharedStyles = `
  position: absolute;
  z-index: 1;
  top: ${getMargin('md')}px;
`;

const Nav = styled.nav`
  ${sharedStyles}
  right: ${getMargin('md')}px;
`;

const MobileNavWrapper = styled.div`
  ${sharedStyles}
  left: ${getMargin('md')}px;
`;

const MobileNav = styled.nav`
  position: relative;
  width: 1.5em;
  height: 1.2em;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1.5em;
    height: 0.25em;
    background: ${getThemeColor};
    box-shadow:
      0 0.45em 0 0 ${getThemeColor},
      0 0.9em 0 0 ${getThemeColor};
  }
`;

const MobileWrapper = styled.div`
  position: relative;
  padding-top: calc(${getMargin('md')}px + 2em);
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: ${getFontFamily('sourceSansPro')};
  font-size: ${getFontSize('md')}em;

  display: flex;
  ${setColor}

  ${mediaQuery('sm', `
    display: block;
  `)}
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
  transition-property: border;
  transition-duration: 150ms;
  transition-timing-function: ease-out;

  &:hover {
    border: 1px solid ${getBorderColor(true)};
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

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      isMobileMenuVisible: false,
      isMobile: false,
    };

    this.onResizeScreen = this.onResizeScreen.bind(this);
    this.onToggleMobileMenu = this.onToggleMobileMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResizeScreen);
    this.onResizeScreen();

    this.setState({
      isVisible: true,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeScreen);
  }

  onToggleMobileMenu() {
    this.setState(({ isMobileMenuVisible }) => ({
      isMobileMenuVisible: !isMobileMenuVisible,
    }));
  }

  onResizeScreen() {
    if (getScreenSize() <= getSize('sm')) {
      this.setState({
        isMobile: true,
      });
      return;
    }

    this.setState({
      isMobile: false,
    });
  }

  renderMobile() {
    const {
      isMobileMenuVisible,
    } = this.state;

    const items = isMobileMenuVisible ? (
      <Ul>
        {mapItems(this.props, routes)}
      </Ul>
    ) : null;

    return (
      <WhiteTheme>
        <Fragment>
          <MobileNavWrapper>
            <MobileNav
              role="navigation"
              onClick={this.onToggleMobileMenu}
              onTouchEnd={this.onToggleMobileMenu}
            />
          </MobileNavWrapper>
          <MobileWrapper>
            {items}
          </MobileWrapper>
        </Fragment>
      </WhiteTheme>
    );
  }

  render() {
    const {
      isMobile,
      isVisible,
    } = this.state;

    // Hide in SSR, need to show it after screen size is obtained
    if (!isVisible) {
      return null;
    }

    if (isMobile) {
      return this.renderMobile();
    }

    return (
      <Nav role="navigation">
        <Ul>
          {mapItems(this.props, routes)}
        </Ul>
      </Nav>
    );
  }
}

export default withRouter(Menu);
