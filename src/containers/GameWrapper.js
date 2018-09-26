import { connect } from 'react-redux';
import Game from '../components/Game';
import * as ac from '../actions/action-creators';

// Containers
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

const GameWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameWrapper;
