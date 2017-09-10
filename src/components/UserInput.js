import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      hometown: "",
    }
  }
  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    }, ()=>console.log("username state is now "+this.state.username))
  }
  handleOnChangeHometown = (event) => {
    this.setState({
      hometown: event.target.value,
    }, ()=>console.log("hometown state is now "+this.state.hometown))
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
      }
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label
            htmlFor="usernameInput">
            Enter username:
          </label>
          <input
            id="usernameInput"
            type="text"
            value={this.state.username}
            onChange={this.handleOnChangeUsername}
          /><br></br>
          <label
            htmlFor="hometownInput">Enter hometown: </label>
          <input
            id="hometownInput"
            type="text"
            value={this.state.hometown}
            onChange={this.handleOnChangeHometown}
          /><br></br>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
