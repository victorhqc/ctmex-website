import styled from 'styled-components';
import { getFontSize } from '../themes/base';
import { noMargin } from '../themes/utils';

const H1 = styled.h1`
  font-family: ${props => props.theme.FONT_FAMILIES.sourceSansPro};
  font-size: ${getFontSize('xl')}em;
  font-weight: bold;

  ${noMargin}
`;

export default H1;
