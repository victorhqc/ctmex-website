import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  setVerticalAlign,
} from '../themes/utils';

const Column = styled.div`
  width: ${props => `${(props.size || 1) * 100}%`};

  ${setVerticalAlign}
`;

Column.propTypes = {
  size: PropTypes.number,
};

Column.defaltProps = {
  size: 1,
};

export default Column;
