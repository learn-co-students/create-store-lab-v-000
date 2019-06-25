import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      hometown: '',
      username: ''
    }
  }

  handleHometownChange = (e) => {
    this.setState({
      hometown: e.target.value
    })
  }
  
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
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
    })
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input type='text' name='username' onChange={(event) => this.handleUsernameChange(event)} />
        <input type='text' name='hometown' onChange={(event) => this.handleHometownChange(event)} />
        <input type='submit' />
      </form>
    );
  }
};

export default UserInput;
