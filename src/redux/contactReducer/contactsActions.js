import actionsTypes from './contactActionsType';
import { getLocalStorageItems } from '../localStorageActions';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const addContact = createAction(actionsTypes.ADD_NEW_CONTACT);

export const deleteContact = createAction(actionsTypes.DELETE_CONTACT);

export const getLocalStorageData = createAsyncThunk(
  actionsTypes.GET_CONTACTS_FROM_LOCAL_STORAGE,
  async () => {
    const persistedData = await getLocalStorageItems();
    return [...persistedData];
  },
);
