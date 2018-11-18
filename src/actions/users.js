import {
  FETCH_USERS,
  UPDATE_USERS_DATA,
} from '../constants/actionTypes/usersActionTypes';
import actionCreator from './helper';

export const fetchUsers = actionCreator(FETCH_USERS);
export const updateUserData = actionCreator(UPDATE_USERS_DATA, 'data');
