import React, { Component } from 'react';

class UserInput extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      hometown: ''
    }
  }

  usernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  hometownChange = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
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
      <div>
        <form onSubmit={this.handleSubmit} >

          <input type="text" value={this.state.username} onChange={this.usernameChange} />
          <input type="text" value={this.state.hometown} onChange={this.hometownChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
