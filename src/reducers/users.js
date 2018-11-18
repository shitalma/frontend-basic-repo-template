import { UPDATE_USERS_DATA } from '../constants/actionTypes/usersActionTypes';
import createReducer from './helpers';

const initialState = {};

const updateUsersData = (state, action) => ({
  ...state,
  data: action.data,
});

const users = createReducer(initialState, {
  [UPDATE_USERS_DATA]: updateUsersData,
});

export default users;
