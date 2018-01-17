import styled from 'styled-components';
import { getSize } from '../themes/base';
import { setHide } from '../themes/utils';

const setMinHeight = ({ minHeight }) => {
  if (!minHeight) {
    return '';
  }

  return `min-height: ${minHeight};`;
};

const Background = styled.div`
  height: ${props => props.height || ''};
  width: ${props => props.width || '100%'};
  position: ${props => props.position || 'relative'};
  z-index: ${props => props.zIndex || ''};

  background-image: ${props => `url(${props.src})` || ''};
  background-position: 'center';
  background-size: cover;
  ${setMinHeight};
  ${setHide};

  @media (max-width: ${getSize('sm')}px) {
    background-position: 75%;
  }
`;

export default Background;
