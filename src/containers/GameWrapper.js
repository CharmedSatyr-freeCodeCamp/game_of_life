import { connect } from 'react-redux';
import * as ac from '../actions/action-creators';

import Game from '../components/Game';

// Containers
const mapStateToProps = state => ({
  generation: state.generation,
  cellData: state.grid,
});

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(ac.clear()),
  makeGrid: () => dispatch(ac.makeGrid()),
  nextGen: () => dispatch(ac.nextGen()),
  toggle: index => dispatch(ac.toggle(index)),
});

const GameWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameWrapper;
