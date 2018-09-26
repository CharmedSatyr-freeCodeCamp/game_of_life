import { connect } from 'react-redux';
import App from '../components/App';
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

const Wrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Wrapper;
