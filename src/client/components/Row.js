import styled from 'styled-components';

const mediaBreakPoint = size => `
  @media (max-width: ${size}px) {
    flex-wrap: wrap;
  }
`;

const wrap = ({ size, theme }) => {
  switch (size) {
    case 'xs':
      return mediaBreakPoint(theme.SIZES.xs);
    case 'md':
      return mediaBreakPoint(theme.SIZES.md);
    case 'lg':
      return mediaBreakPoint(theme.SIZES.lg);
    default:
      return mediaBreakPoint(theme.SIZES.md);
  }
};

const Row = styled.div`
  display: flex;

  ${props => wrap(props)}
`;

export default Row;
