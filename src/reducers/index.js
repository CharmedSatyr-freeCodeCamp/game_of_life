import { combineReducers } from 'redux';
import generation from './generation';
import grid from './grid';

export default combineReducers({
  grid,
  generation,
});
