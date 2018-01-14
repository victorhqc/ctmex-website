import styled from 'styled-components';
import { getColor, getSize } from '../themes/base';

const primaryColor = () => getColor('steelBlue');
const secondaryColor = () => getColor('independence');

const getBackground = (props) => {
  if (!props.src) {
    return `linear-gradient(-45deg, ${primaryColor()}, ${secondaryColor()})`;
  }

  return `
    url(${props.src}), linear-gradient(-45deg, ${primaryColor()}, ${secondaryColor()})
    `;
};

const Background = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -1;

  background: ${primaryColor};
  background: linear-gradient(left top, ${primaryColor}, ${secondaryColor});
  background: ${getBackground};
  background-blend-mode: overlay;
  background-size: cover;

  @media (max-width: ${getSize('sm')}px) {
    background-position: 75%;
  }
`;

export default Background;
