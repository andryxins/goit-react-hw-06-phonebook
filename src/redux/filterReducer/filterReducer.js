import { createReducer } from '@reduxjs/toolkit';
import { changeQuery } from './filterActions';

const filterReducer = createReducer('', {
  [changeQuery]: (state, action) => action.payload,
});

export default filterReducer;
