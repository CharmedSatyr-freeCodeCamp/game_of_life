import { connect } from 'react-redux';
import Grid from './Grid';
import Controls from './Controls';
import * as ac from './actions/action-creators';

// Containers
const mapStateToProps = state => {
  return {
    generation: state.generation,
    cellData: state.cellData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clear: () => dispatch(ac.clear()),
    makeGrid: () => dispatch(ac.makeGrid()),
    nextGen: arr => dispatch(ac.nextGen(arr)),
    toggle: index => dispatch(ac.toggle(index)),
  };
};

export const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

export const ControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
