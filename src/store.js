import {createStore} from 'redux';

// reducers

import moviesReducer from './config/reducers/moviesReducers';

// config store

const Store = createStore(moviesReducer);
export default Store;
