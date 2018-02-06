import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleHometownChange = (e) => {
    this.setState({
      hometown: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          <input
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={this.handleHometownChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
