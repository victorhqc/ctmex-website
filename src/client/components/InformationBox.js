import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  getColor,
} from '../themes/base';

import {
  mediaQuery,
} from '../themes/utils';

import ThemeProvider from '../themes/Provider';

import Container from './Container';
import Row from './Row';
import Column from './Column';
import DoodleBackground from './DoodleBackground';
import Box from './Box';

const Wrapper = styled.div`
  background: ${getColor('white')};
  text-align: center;
`;

const Img = styled.img`
  object-fit: cover;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;

  ${mediaQuery('xs', `
    position: relative;
    max-height: 40vh;
  `)}
`;

class InformationBox extends Component {
  renderWrapper(element) {
    const {
      color,
      doodleSrc,
    } = this.props;

    return (
      <Wrapper>
        <Box>
          <ThemeProvider color={color}>
            <Container
              noMargin
              background="transparent"
              zIndex={1}
            >
              <DoodleBackground src={doodleSrc} />
              {element}
            </Container>
          </ThemeProvider>
        </Box>
      </Wrapper>
    );
  }

  renderRight() {
    const {
      src,
      alt,
      children,
      leftSize,
      rightSize,
    } = this.props;

    return this.renderWrapper((
      <Row size="xs">
        <Column size={leftSize || 1 / 3}>
          <Img src={src} alt={alt} />
        </Column>
        <Column size={rightSize || 2 / 3}>
          {children}
        </Column>
      </Row>
    ));
  }

  renderLeft() {
    const {
      src,
      alt,
      children,
      leftSize,
      rightSize,
    } = this.props;

    return this.renderWrapper((
      <Row size="xs">
        <Column size={leftSize || 2 / 3}>
          {children}
        </Column>
        <Column size={rightSize || 1 / 3}>
          <Img src={src} alt={alt} />
        </Column>
      </Row>
    ));
  }

  render() {
    const {
      textPosition,
    } = this.props;

    switch (textPosition) {
      case 'right':
        return this.renderRight();
      case 'left':
        return this.renderLeft();
      default:
        return null;
    }
  }
}

InformationBox.defaultProps = {
  textPosition: 'right',
  color: 'blue',
  src: null,
  alt: '',
  doodleSrc: null,
  leftSize: 0,
  rightSize: 0,
};

InformationBox.propTypes = {
  textPosition: PropTypes.string,
  color: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  doodleSrc: PropTypes.string,
  children: PropTypes.element.isRequired,
  leftSize: PropTypes.number,
  rightSize: PropTypes.number,
};

export default InformationBox;
