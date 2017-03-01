import { combineReducers } from 'redux';
import { applicationReducer } from './applicationReducer';

const rootReducer = combineReducers({
  counter: applicationReducer
});

export default rootReducer;