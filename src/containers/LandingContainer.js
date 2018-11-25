import { connect } from 'react-redux';

import areStatesEqualGenerator from '../selectors/selectorUtils';
import usersSelector from '../selectors/UsersSelector';
import getUsers from '../saga/users';
import Landing from '../components/Landing';

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
)(Landing);
