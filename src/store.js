// Store
import { createStore } from 'redux';
import { gridReducer } from './reducers/grid';

const store = createStore(gridReducer);

export default store;
