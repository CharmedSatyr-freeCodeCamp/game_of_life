import { connect } from 'react-redux';
import Generations from '../components/Generations';
import Grid from '../components/Grid';
import Controls from '../components/Controls';
import * as ac from '../actions/action-creators';

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
    nextGen: () => dispatch(ac.nextGen()),
    toggle: index => dispatch(ac.toggle(index)),
  };
};

export const GenerationsContainer = connect(
  mapStateToProps,
  null
)(Generations);

export const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

export const ControlsContainer = connect(
  null,
  mapDispatchToProps
)(Controls);
