// Store
import { createStore } from 'redux';
import { gridReducer } from './grid-reducer';

const store = createStore(gridReducer);

export default store;
