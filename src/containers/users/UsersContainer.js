import { connect } from 'react-redux';

import areStatesEqualGenerator from '../../selectors/utils/selectorUtils';
import usersSelector from '../../selectors/users/UsersSelector';
import getUsers from '../../apiCalls/usersApiCall';
import Users from '../../components/users/Users';

const mapStateToProps = state => ({
  users: usersSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    areStatesEqual: areStatesEqualGenerator(usersSelector),
  },
)(Users);
