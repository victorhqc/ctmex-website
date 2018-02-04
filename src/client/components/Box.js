import styled from 'styled-components';

import {
  getMargin,
} from '../themes/base';

const Box = styled.div`
  margin-top: ${getMargin('md')}px;
  margin-left: ${getMargin('md')}px;
  width: calc(100% - ${getMargin('md') * 2}px);
`;

export default Box;
