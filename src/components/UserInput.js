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
    const usernameInput = e.target.value
    this.setState({
      username: usernameInput
    })
  }
  
  handleHometownChange = (e) => {
    const hometownInput = e.target.value
    this.setState({
      hometown: hometownInput
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
    
    this.setState({
      username: '',
      hometown: ''
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" onChange={this.handleUsernameChange} />
          <input type="text" placeholder="hometown" onChange={this.handleHometownChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
