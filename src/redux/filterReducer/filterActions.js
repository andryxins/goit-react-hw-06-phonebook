import actionTypes from './filterActionType';

export const changeQuery = query => ({
  type: actionTypes.CHANGE_QUERY,
  payload: {
    query: query,
  },
});
