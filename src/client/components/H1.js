import styled from 'styled-components';
import { getFontSize, getFontFamily } from '../themes/base';
import { noMargin, setColor } from '../themes/utils';

const H1 = styled.h1`
  font-family: ${getFontFamily('sourceSansPro')};
  font-size: ${getFontSize('xxl')}em;
  font-weight: bold;

  ${noMargin}
  ${setColor}
`;

export default H1;
