import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger, promise} from './middleware';

import todo from '../_reducers/todo';

const reducers = combineReducers({
  todo,
});

const store = createStore(reducers, applyMiddleware(logger, promise));
export default store;
