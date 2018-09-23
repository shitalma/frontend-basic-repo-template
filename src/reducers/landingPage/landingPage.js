import { UPDATE_USER_DATA } from '../../constants/actionTypes/landingPageActionTypes';
import createReducer from '../helpers/helpers';

const initialState = {};

const updateUserData = (state, action) => ({
  ...state,
  userData: action.userData,
});

const landingPage = createReducer(initialState, {
  [UPDATE_USER_DATA]: updateUserData,
});

export default landingPage;
