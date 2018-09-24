import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as c from '../constants/constants';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faRandom, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faPause, faPlay, faRandom, faTimes);

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    this.makeGrid = this.makeGrid.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }
  clear() {
    clearInterval(this.duration);
    this.props.clear();
  }
  makeGrid() {
    clearInterval(this.duration);
    this.props.makeGrid();
  }
  start() {
    clearInterval(this.duration);
    this.duration = setInterval(() => {
      this.props.nextGen();
    }, c.duration);
  }
  stop() {
    clearInterval(this.duration);
  }
  render() {
    return (
      <div className="controls">
        <button onClick={this.start}>
          <FontAwesomeIcon icon="play" />
          &nbsp;Start
        </button>
        <button onClick={this.stop}>
          <FontAwesomeIcon icon="pause" />
          &nbsp;Pause
        </button>
        <button onClick={this.clear}>
          <FontAwesomeIcon icon="times" />
          &nbsp;Clear
        </button>
        <button onClick={this.makeGrid}>
          <FontAwesomeIcon icon="random" />
          &nbsp;Random
        </button>
      </div>
    );
  }
}

Controls.propTypes = {
  clear: PropTypes.func.isRequired,
  makeGrid: PropTypes.func.isRequired,
  nextGen: PropTypes.func.isRequired,
};
