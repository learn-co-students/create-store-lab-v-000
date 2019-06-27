import React, { Component } from 'react';
import User from './User'

class Users extends Component {
  render() {

    const users = this.props.store.getState().users.map((user) => {
      return <User store={this.props.store} user={user}/>
    });

    return(
      <ul>
      {users}
      </ul>
    );
  }
};

export default Users;