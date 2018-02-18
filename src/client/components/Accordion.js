import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import map from 'lodash/map';
import indexOf from 'lodash/indexOf';
import findIndex from 'lodash/findIndex';

import {
  getPadding,
  getColor,
  getMargin,
} from '../themes/base';

const getBackgroundColor = ({ isActive }) => {
  if (!isActive) {
    return getColor('persianBlue');
  }

  return getColor('madison');
};

const Title = styled.button`
  color: ${getColor('white')};
  width: 100%;
  cursor: pointer;
  padding: ${getPadding('lg')}px;
  text-align: left;
  border: none;
  transition-property: background-color;
  transition-duration: 400ms;
  transition-timing-function: ease-in-out;
  margin: 0;
  background-color: ${getBackgroundColor};

  h3 {
    margin: 0;
  }

  &:hover {
    background-color: #persianBlue;
  }
}
`;

const getDisplay = ({ isActive }) => {
  if (!isActive) {
    return 'none';
  }

  return 'block';
};

const contentStyle = `
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
  margin: ${getMargin('lg')}px 0;
  font-size: 1.2em;
  line-height: 1.5em;
`;

const P = styled.p`
  ${contentStyle}
  display: ${getDisplay};
`;

const Ul = styled.ul`
  ${contentStyle}
  display: ${getDisplay};
`;

const isSectionOpened = (section, openedSections) => indexOf(openedSections, section) >= 0;

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openedSections: [],
    };

    this.onSectionClick = this.onSectionClick.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  onSectionClick(section) {
    return () => {
      this.setState(({ openedSections }) => {
        if (!isSectionOpened(section, openedSections)) {
          return {
            openedSections: [
              ...openedSections,
              section,
            ],
          };
        }

        const index = findIndex(openedSections, openedSection => openedSection === section);

        return {
          openedSections: [
            ...openedSections.slice(0, index),
            ...openedSections.slice(index + 1, openedSections.length),
          ],
        };
      });
    };
  }

  isActive(section) {
    const {
      openedSections,
    } = this.state;

    return isSectionOpened(section, openedSections);
  }

  renderDescription(section, description) {
    if (typeof description === 'string') {
      return (
        <P isActive={this.isActive(section)}>{description}</P>
      );
    }

    return (
      <Ul isActive={this.isActive(section)}>
        {map(description, (desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </Ul>
    );
  }

  render() {
    const {
      elements,
    } = this.props;

    return (
      <div>
        {map(elements, ({ title, description }, index) => (
          <article key={index}>
            <Title
              isActive={this.isActive(title)}
              onClick={this.onSectionClick(title)}
            >
              <h3>{title}</h3>
            </Title>
            {this.renderDescription(title, description)}
          </article>
        ))}
      </div>
    );
  }
}

Accordion.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  })).isRequired,
};

export default Accordion;
