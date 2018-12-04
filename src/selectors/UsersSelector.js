import { createSelector } from 'reselect';

const usersDataSelector = state => state.users && state.users.data;

const usersSelector = createSelector(
  usersDataSelector,
  usersDataFromStore => {
    if (!usersDataFromStore) return [];

    const data = usersDataFromStore.map(user => ({
      userId: user.id,
      userName: user.username,
    }));
    return data;
  },
);

export default usersSelector;
