import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Users extends PureComponent {
  static propTypes = {
    getUsers: PropTypes.func,
    users: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    getUsers: () => {},
    users: [],
  };

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <ul className="js-userName">
        {users.map(user => (
          <li key={user.userId}>{user.userName}</li>
        ))}
      </ul>
    );
  }
}
