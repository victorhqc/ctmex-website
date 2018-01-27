import React from 'react';
import styled from 'styled-components';

import {
  getMargin,
} from '../themes/base';

import logo from '../../assets/ctmex.svg';

const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate3d(${getMargin('md')}px, -${getMargin('md')}px, 0);
`;

const Logo = props => (
  <Img src={logo} alt="ctmex logo" width="150" {...props} />
);

export default Logo;
