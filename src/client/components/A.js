import styled from 'styled-components';

import {
  getColor,
} from '../themes/base';

const A = styled.a`
  color: ${getColor('persianBlue')};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default A;
