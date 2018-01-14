import styled from 'styled-components';
import { getFontSize } from '../themes/base';
import { noMargin } from '../themes/utils';

const H1 = styled.h1`
  font-size: ${getFontSize('xl')}em;
  font-weight: lighter;

  ${noMargin}
`;

export default H1;
