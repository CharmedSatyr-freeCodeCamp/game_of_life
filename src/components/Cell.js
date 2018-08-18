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
        style={{
          alignItems: 'center',
          backgroundColor: this.props.alive ? 'gold' : 'lightblue',
          boxShadow: '0 0 1px black',
          display: 'flex',
          fontSize: 10,
          height: c.cellDimensions,
          justifyContent: 'center',
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
