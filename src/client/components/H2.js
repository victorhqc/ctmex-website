import styled from 'styled-components';
import { getFontSize, getFontFamily } from '../themes/base';
import { noMargin, setColor } from '../themes/utils';

const H2 = styled.h2`
  font-family: ${getFontFamily('sourceSansPro')};
  font-size: ${getFontSize('xl')}em;
  font-weight: lighter;

  ${noMargin}
  ${setColor}
`;

export default H2;
