// Store
import { createStore } from 'redux';
import grid from './reducers/grid';

const store = createStore(grid);
export default store;
