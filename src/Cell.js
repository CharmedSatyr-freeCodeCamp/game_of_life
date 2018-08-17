import React, { Component } from 'react';
import * as c from './constants';
import PropTypes from 'prop-types';

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
          backgroundColor: this.props.alive ? 'gold' : 'lightblue',
          boxShadow: '0 0 1px black',
          fontSize: 10,
          height: c.cellDimensions,
          width: c.cellDimensions,
        }}
        onClick={this.toggle}
      >
        {this.props.index}
      </div>
    );
  }
}

Cell.propTypes = {
  alive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired,
};
