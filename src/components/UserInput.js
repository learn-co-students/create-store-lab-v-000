import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleHometownChange(event) {
    this.setState({
      hometown: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Username</label>
          <input name="username" onChange={(event) => this.handleUsernameChange(event)} type="text"/><br/>

          <label>Hometown</label>
          <input name="hometown" onChange={(event) => this.handleHometownChange(event)} type="text"/><br />

          <input type="submit"/>
         </form>
      </div>
    );
  }
};

export default UserInput;
