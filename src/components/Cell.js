import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as c from '../constants/constants';

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.props.toggle(this.props.index);
  }
  render() {
    return (
      <div
        className={`cell ${this.props.alive ? 'alive' : 'dead'}`}
        style={{
          height: c.cellDimensions,
          width: c.cellDimensions,
        }}
        onClick={this.toggle}
      />
    );
  }
}

Cell.propTypes = {
  alive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired,
};
