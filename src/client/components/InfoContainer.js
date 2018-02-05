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
  width: ${props => props.width};
  margin: 0 auto;
  ${setColor}

  ${mediaQuery('xs', `
    width: 100%;
    margin: 0 ${getMargin('xs')}px;
  `)}
`;

export default InfoContainer;
