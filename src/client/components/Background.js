import styled from 'styled-components';
import { getSize } from '../themes/base';

const Background = styled.div`
  height: ${props => props.height || '100vh'};
  width: ${props => props.width || '100%'};
  position: ${props => props.position || 'relative'};
  z-index: ${props => props.zIndex || ''};

  background-image: ${props => `url(${props.src})` || ''};
  background-position: 'center';
  background-size: cover;

  @media (max-width: ${getSize('sm')}px) {
    background-position: 75%;
  }
`;

export default Background;
