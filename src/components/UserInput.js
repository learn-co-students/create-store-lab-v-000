import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handleHometownChange = (event) => {
    this.setState({
      hometown: event.target.value
    });
  }

  handleSubmit = () => {
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {username: this.state.username, hometown: this.state.hometown }
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/><br/>

          <label>Hometown:</label>
          <input type="text" value={this.state.hometown} onChange={this.handleHometownChange}/><br/>

          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
