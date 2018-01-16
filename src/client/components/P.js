import styled from 'styled-components';
import { getFontSize } from '../themes/base';

import {
  setTextAlign,
  setPadding,
  setMargin,
  noMargin,
  noPadding,
  setColor,
} from '../themes/utils';

const fontSize = (props) => {
  if (props.lead) {
    return '1.2em';
  }

  return `${getFontSize('md')}em`;
};

const P = styled.p`
  font-size: ${fontSize};
  font-weight: 300;

  ${setTextAlign}
  ${setPadding}
  ${setMargin}
  ${noMargin}
  ${noPadding}
  ${setColor}
`;

export default P;
