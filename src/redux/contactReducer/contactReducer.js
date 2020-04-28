import actionsTypes from '../contactReducer/contactActionsType';

const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_NEW_CONTACT:
      return [...state, payload.newContact];

    case actionsTypes.DELETE_CONTACT:
      return state.filter(item => item.id !== payload.id);

    case actionsTypes.GET_CONTACTS_FROM_LOCAL_STORAGE:
      return [...state, ...payload.contacts];

    default:
      return state;
  }
};

export default contactReducer;
