// Store
import { createStore } from 'redux';
import { gridReducer } from './reducers/grid-reducer';

const store = createStore(gridReducer);

export default store;
