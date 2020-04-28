import actionsTypes from './contactActionsType';
import { getLocalStorageItems } from '../localStorageActions';

export const addContact = obj => ({
  type: actionsTypes.ADD_NEW_CONTACT,
  payload: {
    newContact: { ...obj },
  },
});

export const deleteContact = id => ({
  type: actionsTypes.DELETE_CONTACT,
  payload: {
    id: id,
  },
});

export const getLocalStorageData = () => dispatch => {
  const persistedData = getLocalStorageItems();
  dispatch({
    type: actionsTypes.GET_CONTACTS_FROM_LOCAL_STORAGE,
    payload: {
      contacts: [...persistedData],
    },
  });
};
