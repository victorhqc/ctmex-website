import styled from 'styled-components';
import { getFontSize, getFontFamily, getThemeColor } from '../themes/base';
import { noMargin, setColor } from '../themes/utils';

const H2 = styled.h2`
  font-family: ${getFontFamily('sourceSansPro')};
  font-size: ${getFontSize('md')}em;
  font-weight: lighter;

  ${noMargin}
  ${setColor}

  small {
    font-family: ${getFontFamily('gotham')};
    color: ${getThemeColor}95;
  }
`;

export default H2;
