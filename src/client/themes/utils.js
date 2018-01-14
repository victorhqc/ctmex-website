import capitalize from 'lodash/capitalize';

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

export const setVerticalAlign = (props) => {
  if (!props.verticalAlign) {
    return '';
  }

  return `
  height: 100vh;
  text-align: center;

  display: flex;
  justify-content: center;
  flex-direction: column;
  `;
};

export const setTextAlign = (props) => {
  if (!props.textAlign) {
    return '';
  }

  return `text-align: ${props.textAlign};`;
};
