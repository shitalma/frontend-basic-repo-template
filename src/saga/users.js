import * as http from '../utils/fetch';
import urls from '../constants/urls';
import { fetchUsers, updateUserData } from '../actions/users';

const getUsers = () => dispatch => {
  dispatch(fetchUsers());
  http
    .get(urls.GET_USER_DATA)
    .then(response => dispatch(updateUserData(response.data)));
};

export default getUsers;
