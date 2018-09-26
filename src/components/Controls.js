import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as c from '../constants/constants';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPause,
  faPlay,
  faRandom,
  faStepForward,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
library.add(faPause, faPlay, faRandom, faStepForward, faTimes);

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    this.random = this.random.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.step = this.step.bind(this);

    this.state = { selected: null };
  }
  clear() {
    clearInterval(this.duration);
    this.props.clear();
    this.setState({ selected: 'clear' });
  }
  pause() {
    clearInterval(this.duration);
    this.setState({ selected: 'pause' });
  }
  play() {
    clearInterval(this.duration);
    this.duration = setInterval(() => {
      this.props.nextGen();
    }, c.duration);
    this.setState({ selected: 'play' });
  }
  random() {
    clearInterval(this.duration);
    this.props.makeGrid();
    this.setState({ selected: 'random' });
  }
  step() {
    this.props.nextGen();
  }
  render() {
    const { selected } = this.state;
    return (
      <div className="controls">
        <button onClick={this.step}>
          <FontAwesomeIcon icon="step-forward" />
          &nbsp;Step
        </button>

        <button className={selected === 'play' && 'selected'} onClick={this.play}>
          <FontAwesomeIcon icon="play" />
          &nbsp;Start
        </button>

        <button className={selected === 'pause' && 'selected'} onClick={this.pause}>
          <FontAwesomeIcon icon="pause" />
          &nbsp;Pause
        </button>

        <button className={selected === 'clear' && 'selected'} onClick={this.clear}>
          <FontAwesomeIcon icon="times" />
          &nbsp;Clear
        </button>

        <button className={selected === 'random' && 'selected'} onClick={this.random}>
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
