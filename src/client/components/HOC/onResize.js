import React, { Component } from 'react';
import reduce from 'lodash/reduce';
import capitalize from 'lodash/capitalize';

import {
  SIZES,
} from '../../themes/constants';

const onResize = WrappedComponent => class OnResize extends Component {
  constructor(props) {
    super(props);

    this.state = reduce(SIZES, (prev, size, key) => ({
      ...prev,
      [`is${capitalize(key)}`]: false,
    }), {});

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const width = window.innerWidth;

    const isSize = reduce(SIZES, (prev, size, key) => ({
      ...prev,
      [`is${capitalize(key)}`]: width <= size,
    }), {});

    this.setState({
      ...isSize,
    });
  }

  render() {
    return (
      <WrappedComponent {...this.props} {...this.state} />
    );
  }
};

export default onResize;
