import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as ac from '../actions/action-creators';
import Generations from './Generations';
import Grid from './Grid';
import Controls from './Controls';

const Game = props => (
  <>
    <div className="game">
      <Generations generation={props.generation} />
      <Grid cellData={props.cellData} makeGrid={props.makeGrid} toggle={props.toggle} />
      <Controls clear={props.clear} makeGrid={props.makeGrid} nextGen={props.nextGen} />
    </div>
    <p className="backup">
      For an optimal experience, please view this application on a wider screen.
    </p>
  </>
);

const mapStateToProps = state => ({
  generation: state.generation,
  cellData: state.cellData,
});

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(ac.clear()),
  makeGrid: () => dispatch(ac.makeGrid()),
  nextGen: () => dispatch(ac.nextGen()),
  toggle: index => dispatch(ac.toggle(index)),
});

Game.propTypes = {
  cellData: PropTypes.arrayOf(PropTypes.bool).isRequired,
  clear: PropTypes.func.isRequired,
  generation: PropTypes.number.isRequired,
  makeGrid: PropTypes.func.isRequired,
  nextGen: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
