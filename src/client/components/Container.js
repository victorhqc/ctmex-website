import styled from 'styled-components';
import {
  setVerticalAlign,
  setTextAlign,
  setPadding,
  setMargin,
  noMargin,
  noPadding,
} from '../themes/utils';

const Container = styled.div`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.color};

  ${setMargin}
  ${setPadding}
  ${setVerticalAlign}
  ${setTextAlign}
  ${noMargin}
  ${noPadding}
`;

export default Container;
