import { combineReducers } from 'redux';
import contactReducer from './contactReducer/contactReducer';
import filterReducer from './filterReducer/filterReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;
