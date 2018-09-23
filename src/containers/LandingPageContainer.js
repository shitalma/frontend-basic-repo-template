import { connect } from 'react-redux';

import LandingPage from '../components/landingPage/LandingPage';
import landingPageUserDataSelector from '../selectors/landingPage/LandingPageUserDataSelector';
import areStatesEqualGenerator from '../selectors/utils/selectorUtils';
import getUsers from '../apiCalls/userDataApiCall';

const mapStateToProps = state => ({
  userData: landingPageUserDataSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getUsersData: () => dispatch(getUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    areStatesEqual: areStatesEqualGenerator(landingPageUserDataSelector),
  },
)(LandingPage);
