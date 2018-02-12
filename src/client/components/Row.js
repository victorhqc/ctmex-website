import styled from 'styled-components';

import {
  mediaQuery,
} from '../themes/utils';

const mediaBreakPoint = size => `
  ${mediaQuery(size, `
    flex-wrap: wrap;

    > div {
      width: 100% !important;
    }
  `)}
`;

const wrap = ({ size, noWrap }) => {
  if (noWrap) {
    return '';
  }

  switch (size) {
    case 'xs':
      return mediaBreakPoint('xs');
    case 'sm':
      return mediaBreakPoint('sm');
    case 'md':
      return mediaBreakPoint('md');
    case 'lg':
      return mediaBreakPoint('lg');
    case 'xl':
      return mediaBreakPoint('xl');
    default:
      return mediaBreakPoint('md');
  }
};

const setGapBetweenChildren = ({ gap, size }) => {
  if (!gap) {
    return '';
  }

  return `
    > *:first-child {
      margin: 0 ${gap} 0 0;

      ${mediaQuery(size, `
        margin: 0 0 ${gap} 0;
      `)}
    }

    > *:last-child {
      margin: 0 0 0 ${gap};

      ${mediaQuery(size, `
        margin: ${gap} 0 0 0;
      `)}
    }

    > * {
      margin: 0 ${gap};
      /* Horrible, horrible hack, but i'm tired and I don't want to make an abstraction, sue me. */
      z-index: 1;

      ${mediaQuery(size, `
        margin: ${gap} 0;
      `)}
    }
  `;
};

const Row = styled.div`
  display: flex;

  ${props => wrap(props)}
  ${setGapBetweenChildren};
`;

export default Row;
