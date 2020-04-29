import { createReducer } from '@reduxjs/toolkit';
import {
  getLocalStorageData,
  addContact,
  deleteContact,
} from './contactsActions';

const contactReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(item => item.id !== action.payload),
  [getLocalStorageData.fulfilled]: (state, action) => [
    ...state,
    ...action.payload,
  ],
});

export default contactReducer;
