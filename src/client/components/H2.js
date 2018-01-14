import styled from 'styled-components';
import { getFontSize } from '../themes/base';
import { noMargin } from '../themes/utils';

const H2 = styled.h2`
  font-size: ${getFontSize('lg')}em;
  font-weight: lighter;

  ${noMargin}
`;

export default H2;
