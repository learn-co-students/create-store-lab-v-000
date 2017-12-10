import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handleOnChangeHometown = (event) => {
    this.setState({
      hometown: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={ this.handleOnSubmit }>
          <label htmlFor='username'>Username:</label>
          <input onChange={ this.handleOnChangeUsername } type='text' id='username' />
          <label htmlFor='hometown'>Hometown:</label>
          <input onChange={ this.handleOnChangeHometown } type='text' id='hometown' />
          <button>Add User</button>
        </form>
        { this.state.username }
        {this.state.hometown }
      </div>
    );
  }
};

export default UserInput;
