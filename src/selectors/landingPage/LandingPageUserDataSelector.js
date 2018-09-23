import { createSelector } from 'reselect';

const usersDataSelector = state =>
  state.landingPage && state.landingPage.userData;

const landingPageUserDataSelector = createSelector(
  usersDataSelector,
  usersDataFromStore => {
    if (!usersDataFromStore) return [];

    return usersDataFromStore.map(user => ({
      userId: user.id,
      userName: user.username,
    }));
  },
);

export default landingPageUserDataSelector;
