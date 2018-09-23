import {
  FETCH_USERS,
  UPDATE_USER_DATA,
} from '../../constants/actionTypes/landingPageActionTypes';
import actionCreator from '../helper';

export const fetchUsers = actionCreator(FETCH_USERS);
export const updateUserData = actionCreator(UPDATE_USER_DATA, 'userData');
