import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  }

  handleHometownChange = (event) => {
    this.setState({
      hometown: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      // username: this.state.username,
      // hometown: this.state.hometown,
      user: this.state,
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Username</label>
          <input type="text" onChange={(event) => this.handleUsernameChange(event)}/>
          <label>Hometown</label>
          <input type="text" onChange={(event) => this.handleHometownChange(event)}/>
          {this.state.username}
          {this.state.hometown}
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
