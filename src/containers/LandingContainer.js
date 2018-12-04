import { connect } from 'react-redux';

import areStatesEqualGenerator from '../selectors/selectorUtils';
import usersSelector from '../selectors/UsersSelector';
import getUsers from '../saga/users';
import Landing from '../components/Landing';
import { fetchUsers } from '../actions/users';

const mapStateToProps = state => ({
  users: usersSelector(state),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers() {
      dispatch(fetchUsers());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    areStatesEqual: areStatesEqualGenerator(usersSelector),
  },
)(Landing);
