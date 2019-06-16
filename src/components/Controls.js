import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

// Controls
export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: null };
  }

  clear = () => {
    if (this.state.selected !== 'clear') {
      cancelAnimationFrame(this.requestID);
      this.props.clear();
      this.setState({ selected: 'clear' });
    }
  };

  pause = () => {
    if (
      this.state.selected !== 'clear' &&
      this.state.selected !== 'pause' &&
      this.state.selected !== 'random'
    ) {
      cancelAnimationFrame(this.requestID);
      this.setState({ selected: 'pause' });
    }
  };

  play = () => {
    this.props.nextGen();
    this.requestID = requestAnimationFrame(this.play);
    this.setState({ selected: 'play' });
  };

  random = () => {
    cancelAnimationFrame(this.requestID);
    this.props.makeGrid();
    this.setState({ selected: 'random' });
  };

  step = () => {
    if (this.state.selected !== 'play') {
      this.props.nextGen();
    }
  };

  componentDidMount() {
    this.play();
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="controls">
        {/* STEP */}
        <button className={`step ${selected === 'play' ? 'disabled' : ''}`} onClick={this.step}>
          <FontAwesomeIcon icon="step-forward" />
          &nbsp;Step
        </button>

        {/* PLAY */}
        <button
          className={`play ${selected === 'play' ? 'selected disabled' : ''}`}
          onClick={selected !== 'play' ? this.play : null}
        >
          <FontAwesomeIcon icon="play" />
          &nbsp;Play
        </button>

        {/* PAUSE */}
        <button
          className={`pause ${selected === 'pause' ? 'selected disabled' : ''} ${
            selected !== 'play' ? 'disabled' : ''
          }`}
          onClick={this.pause}
        >
          <FontAwesomeIcon icon="pause" />
          &nbsp;Pause
        </button>

        {/* CLEAR */}
        <button
          className={`clear ${selected === 'clear' ? 'selected disabled' : ''}`}
          onClick={this.clear}
        >
          <FontAwesomeIcon icon="times" />
          &nbsp;Clear
        </button>

        {/* RANDOM */}
        <button
          className={`random ${selected === 'random' ? 'selected' : ''}`}
          onClick={this.random}
        >
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
