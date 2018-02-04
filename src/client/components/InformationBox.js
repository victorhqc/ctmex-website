import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  getColor,
  getMargin,
} from '../themes/base';

import {
  mediaQuery,
} from '../themes/utils';

import ThemeProvider from '../themes/Provider';

import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import DoodleBackground from '../components/DoodleBackground';

const Wrapper = styled.div`
  background: ${getColor('white')};
  text-align: center;
`;

const Box = styled.div`
  margin-top: ${getMargin('md')}px;
  margin-left: ${getMargin('md')}px;
  width: calc(100% - ${getMargin('md') * 2}px);
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
    } = this.props;

    return this.renderWrapper((
      <Row size="xs">
        <Column size={1 / 3}>
          <Img src={src} alt={alt} />
        </Column>
        <Column size={2 / 3}>
          <section>
            {children}
          </section>
        </Column>
      </Row>
    ));
  }

  renderLeft() {
    const {
      src,
      alt,
      children,
    } = this.props;

    return this.renderWrapper((
      <Row size="xs">
        <Column size={2 / 3}>
          <section>
            {children}
          </section>
        </Column>
        <Column size={1 / 3}>
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
};

InformationBox.propTypes = {
  textPosition: PropTypes.string,
  color: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  doodleSrc: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default InformationBox;
