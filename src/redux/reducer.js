import { wordleReducer } from './wordle/reducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  wordleManagement: wordleReducer
});

export default rootReducer;
