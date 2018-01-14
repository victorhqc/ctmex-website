import styled from 'styled-components';
import { getFontSize } from '../themes/base';

const fontSize = (props) => {
  if (props.lead) {
    return '1.2em';
  }

  return `${getFontSize('md')}em`;
};

const P = styled.p`
  font-size: ${fontSize};
  font-weight: 300;
`;

export default P;
