import { connect } from 'react-redux';
import LandingPage from '../components/landingPage/LandingPage';

import * as http from '../utils/common/fetch';
import updateUserData from '../actions/landingPage/landingPage';
import urls from '../constants/urls';
import landingPageUserDataSelector from '../selectors/landingPage/LandingPageUserDataSelector';
import areStatesEqualGenerator from '../selectors/utils/selectorUtils';

const mapStateToProps = state => ({
  userData: landingPageUserDataSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getUsersData() {
    http.get(urls.GET_USER_DATA).then(response => {
      dispatch(updateUserData(response.data));
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    areStatesEqual: areStatesEqualGenerator(landingPageUserDataSelector),
  },
)(LandingPage);
