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
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.random = this.random.bind(this);
    this.step = this.step.bind(this);

    this.state = { selected: null };
  }
  clear() {
    if (this.state.selected !== 'clear') {
      clearInterval(this.duration);
      this.props.clear();
      this.setState({ selected: 'clear' });
    }
  }
  pause() {
    if (
      this.state.selected !== 'pause' &&
      this.state.selected !== 'clear' &&
      this.state.selected !== 'random'
    ) {
      clearInterval(this.duration);
      this.setState({ selected: 'pause' });
    }
  }
  play() {
    if (this.state.selected !== 'clear' && this.state.selected !== 'play') {
      clearInterval(this.duration);
      this.duration = setInterval(() => {
        this.props.nextGen();
      }, c.duration);
      this.setState({ selected: 'play' });
    }
  }
  random() {
    clearInterval(this.duration);
    this.props.makeGrid();
    this.setState({ selected: 'random' });
  }
  step() {
    if (this.state.selected !== 'clear' && this.state.selected !== 'play') {
      this.props.nextGen();
    }
  }
  componentDidMount() {
    this.play();
  }
  render() {
    const { selected } = this.state;
    return (
      <div className="controls">
        {/* STEP */}
        <button
          className={selected !== 'random' && selected !== 'pause' && 'disabled'}
          onClick={this.step}
        >
          <FontAwesomeIcon icon="step-forward" />
          &nbsp;Step
        </button>

        {/* PLAY */}
        <button
          className={`${selected === 'play' && 'selected disabled'} ${selected === 'clear' &&
            'disabled'}`}
          onClick={this.play}
        >
          <FontAwesomeIcon icon="play" />
          &nbsp;Play
        </button>

        {/* PAUSE */}
        <button
          className={`${selected === 'pause' && 'selected disabled'} ${selected !== 'play' &&
            'disabled'}`}
          onClick={this.pause}
        >
          <FontAwesomeIcon icon="pause" />
          &nbsp;Pause
        </button>

        {/* CLEAR */}
        <button className={selected === 'clear' && 'selected disabled'} onClick={this.clear}>
          <FontAwesomeIcon icon="times" />
          &nbsp;Clear
        </button>

        {/* RANDOM */}
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
