import actionTypes from './filterActionType';
import { createAction } from '@reduxjs/toolkit';

export const changeQuery = createAction(actionTypes.CHANGE_QUERY);
