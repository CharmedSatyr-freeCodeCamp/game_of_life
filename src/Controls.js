import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as c from './constants/constants';

let duration;
export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    this.makeGrid = this.makeGrid.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }
  clear() {
    this.props.clear();
    clearInterval(duration);
  }
  makeGrid() {
    this.props.makeGrid();
  }
  start() {
    duration = setInterval(() => {
      this.props.nextGen();
    }, c.duration);
  }
  stop() {
    clearInterval(duration);
  }
  render() {
    return (
      <div>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
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
