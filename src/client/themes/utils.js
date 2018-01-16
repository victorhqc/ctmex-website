import capitalize from 'lodash/capitalize';
import {
  getSize,
} from './base';

const setSpacing = (props, keyName) => {
  if (!props[keyName]) {
    return '';
  }

  const defaultProps = typeof props[keyName] === 'number'
    ? {
      top: props[keyName],
      bottom: props[keyName],
      right: props[keyName],
      left: props[keyName],
    }
    : props[keyName];

  const base = {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    ...defaultProps,
  };

  return `
  ${keyName}: ${base.top}px ${base.right}px ${base.bottom}px ${base.left}px;
  `;
};

export const setMargin = props => setSpacing(props, 'margin');

export const setPadding = props => setSpacing(props, 'padding');

const noSpacing = (props, keyName) => {
  if (props[`no${capitalize(keyName)}`]) {
    return `${keyName}: 0;`;
  }

  return '';
};

export const noMargin = props => noSpacing(props, 'margin');

export const noPadding = props => noSpacing(props, 'padding');

export const setVerticalAlign = ({ verticalAlign }) => {
  if (!verticalAlign) {
    return '';
  }

  return `
  text-align: center;

  display: flex;
  justify-content: center;
  flex-direction: column;
  `;
};

export const setTextAlign = ({ textAlign }) => {
  if (!textAlign) {
    return '';
  }

  return `text-align: ${textAlign};`;
};

export const setColor = ({ theme }) => {
  if (!theme.color || !theme.color) {
    return '';
  }

  return `color: ${theme.color};`;
};

export const setWidth = ({ width }) => {
  if (!width) {
    return '';
  }

  return `width: ${width};`;
};

export const setHeight = ({ height }) => {
  if (!height) {
    return '';
  }

  return `height: ${height};`;
};

export const setBackground = ({ theme, background }) => {
  if (!background && !theme.backgroundColor) {
    return '';
  }

  if (!background && theme.backgroundColor) {
    return `background: ${theme.backgroundColor};`;
  }

  return `background: ${background};`;
};

const hideWithSize = size => `
  @media (max-width: ${getSize(size)}px) {
    display: none;
  }
`;

export const setHide = ({ hide }) => {
  switch (hide) {
    case true:
      return 'display: none';
    case 'xs':
    case 'sm':
    case 'md':
    case 'lg':
      return hideWithSize(hide);
    default:
      return '';
  }
};
