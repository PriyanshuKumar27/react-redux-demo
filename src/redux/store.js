import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//for accessing redux-devtools extension in our application
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;