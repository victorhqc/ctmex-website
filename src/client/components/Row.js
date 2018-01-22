import styled from 'styled-components';

import {
  getSize,
} from '../themes/base';

const mediaBreakPoint = size => `
  @media (max-width: ${size}px) {
    flex-wrap: wrap;

    > div {
      width: 100% !important;
    }
  }
`;

const wrap = ({ size, noWrap }) => {
  if (noWrap) {
    return '';
  }

  switch (size) {
    case 'xs':
      return mediaBreakPoint(getSize('xs'));
    case 'sm':
      return mediaBreakPoint(getSize('sm'));
    case 'md':
      return mediaBreakPoint(getSize('md'));
    case 'lg':
      return mediaBreakPoint(getSize('lg'));
    case 'xl':
      return mediaBreakPoint(getSize('xl'));
    default:
      return mediaBreakPoint(getSize('md'));
  }
};

const Row = styled.div`
  display: flex;

  ${props => wrap(props)}
`;

export default Row;
