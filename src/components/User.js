import React, { Component } from 'react';
import UserInput from './UserInput'

class User extends Component {

  
  render() {
    return (
      <div>
      <li>
        {this.props.user.username}
        {this.props.user.hometown}
      </li>
      </div>
    );
  }
};

export default User;
