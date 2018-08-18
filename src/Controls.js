import React, { Component } from 'react';
import PropTypes from 'prop-types';

let c;
export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    this.makeGrid = this.makeGrid.bind(this);
    this.start = this.start.bind(this);
  }
  clear() {
    this.props.clear();
    clearInterval(c);
  }
  makeGrid() {
    this.props.makeGrid();
  }
  start() {
    c = setInterval(() => {
      this.props.nextGen(this.props.cellData);
    }, 500);
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
  cellData: PropTypes.arrayOf(PropTypes.object.isRequired),
  clear: PropTypes.func.isRequired,
  makeGrid: PropTypes.func.isRequired,
  nextGen: PropTypes.func.isRequired,
};
