import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { getLocalStorageData } from './contactReducer/contactsActions';
import { updateLocalStorage } from './localStorageActions';

const initialState = {
  filter: '',
  contacts: [],
};

const store = createStore(
  rootReducer,
  { ...initialState },
  composeWithDevTools(applyMiddleware(thunk)),
);

store.dispatch(getLocalStorageData());

store.subscribe(() => updateLocalStorage(store.getState().contacts));

export default store;
