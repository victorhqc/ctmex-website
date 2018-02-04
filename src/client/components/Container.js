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
  setMinHeight,
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

const setZIndex = (props) => {
  if (!props.zIndex) {
    return '';
  }

  return `z-index: ${props.zIndex};`;
};

const Container = styled.div`
  font-family: ${props => props.theme.fontFamily};
  position: relative;
  ${setZIndex};
  ${margin}
  ${setPadding}
  ${setVerticalAlign}
  ${setTextAlign}
  ${noMargin}
  ${noPadding}
  ${setColor}
  ${setWidth}
  ${setHeight}
  ${setMinHeight}
  ${setBackground}
  ${setHide}
`;

export default Container;
