import actionTypes from './filterActionType';

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_QUERY:
      return payload.query;

    default:
      return state;
  }
};

export default filterReducer;
