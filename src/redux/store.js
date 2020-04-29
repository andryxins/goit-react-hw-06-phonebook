import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { getLocalStorageData } from './contactReducer/contactsActions';
import { updateLocalStorage } from './localStorageActions';

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(getLocalStorageData());

store.subscribe(() => updateLocalStorage(store.getState().contacts));

export default store;
