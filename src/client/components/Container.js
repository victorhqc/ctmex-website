import styled from 'styled-components';
import {
  setVerticalAlign,
  setTextAlign,
  setPadding,
  setMargin,
  noMargin,
  noPadding,
  setColor,
  setWidth,
  setHeight,
  setBackground,
  setHide,
} from '../themes/utils';

import {
  getMargin,
} from '../themes/base';

const margin = (props) => {
  if (props.margin) {
    return setMargin(props);
  }

  return `margin: 0 ${getMargin('md')}px;`;
};

const Container = styled.div`
  font-family: ${props => props.theme.fontFamily};
  ${margin}
  ${setMargin}
  ${setPadding}
  ${setVerticalAlign}
  ${setTextAlign}
  ${noMargin}
  ${noPadding}
  ${setColor}
  ${setWidth}
  ${setHeight}
  ${setBackground}
  ${setHide}
`;

export default Container;
