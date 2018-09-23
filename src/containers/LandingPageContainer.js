import { connect } from 'react-redux';
import LandingPage from '../components/landingPage/LandingPage';

import * as http from '../utils/common/fetch';
import updateUserData from '../actions/landingPage/landingPage';
import urls from '../constants/urls';

const mapStateToProps = state => ({
  userData: state.landingPage.userData,
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
)(LandingPage);
