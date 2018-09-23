import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LandingPage extends Component {
  static propTypes = {
    getUsersData: PropTypes.func,
    userData: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    getUsersData: () => {},
    userData: [],
  };

  componentDidMount() {
    const { getUsersData } = this.props;
    getUsersData();
  }

  render() {
    const { userData } = this.props;
    return (
      <ul className="js-userName">
        {userData && userData.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    );
  }
}
