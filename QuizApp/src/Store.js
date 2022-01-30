import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers';
import promiseid from 'redux-promise-middleware';

const middlewares = applyMiddleware(thunk, promiseid);
const store = createStore(reducers, middlewares);
export default store;
