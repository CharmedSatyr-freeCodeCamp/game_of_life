import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    this.makeGrid = this.makeGrid.bind(this);
    this.start = this.start.bind(this);
  }
  clear() {
    this.props.clear();
  }
  makeGrid() {
    this.props.makeGrid();
  }
  start() {
    this.props.nextGen();
  }
  render() {
    return (
      <div>
        <button onClick={this.start}>Start</button>
        <button>Stop</button>
        <button onClick={this.clear}>Clear</button>
        <button onClick={this.makeGrid}>Randomize</button>
      </div>
    );
  }
}

Controls.propTypes = {
  clear: PropTypes.func.isRequired,
  makeGrid: PropTypes.func.isRequired,
  nextGen: PropTypes.func.isRequired,
};
