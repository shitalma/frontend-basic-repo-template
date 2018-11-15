import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../../uiComponents/Button';

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
      <div className="js-userName">
        {users.map(user => (
          <Button key={user.userId}>{user.userName}</Button>
        ))}
      </div>
    );
  }
}
