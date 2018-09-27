import { combineReducers } from 'redux';

import cellData from './cellData';
import generation from './generation';

export default combineReducers({
  cellData,
  generation,
});
