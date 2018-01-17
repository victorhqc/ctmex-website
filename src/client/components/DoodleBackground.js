import React from 'react';
import styled from 'styled-components';

const repeatedStyles = `
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Wrapper = styled.div`
  z-index: -1;
  ${repeatedStyles}
`;

const Background = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  width: 100%;
  height: 100%;
`;

const Doodle = styled.div`
  background-image: url(${props => props.src});
  background-color: ${props => props.theme.backgroundColor};
  background-blend-mode: soft-light;
  opacity: 0.2;
  ${repeatedStyles}
`;

const DoodleBackground = props => (
  <Wrapper>
    <Background {...props} />
    <Doodle {...props} />
  </Wrapper>
);

export default DoodleBackground;
