import styled from 'styled-components';

import {
  getMargin,
  getLineHeight,
} from '../themes/base';

import {
  setColor,
  mediaQuery,
} from '../themes/utils';

const InfoContainer = styled.div`
  text-align: left;
  line-height: ${getLineHeight('lg')};
  width: calc(${props => props.width} - ${props => (props.marginLeft || 0) + (props.marginRight || 0)}px);
  margin-right: ${props => props.marginRight || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
  ${setColor}

  ${mediaQuery('xs', `
    width: 100%;
    margin: 0 ${getMargin('xs')}px;
  `)}
`;

export default InfoContainer;
