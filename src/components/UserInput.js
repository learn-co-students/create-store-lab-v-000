import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsernameOnChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleHometownOnChange(event) {
    this.setState({
      hometown: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER', 
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      },
    });
    this.setState({
      username: '',
      hometown: ''
    });
  }
  
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>Username: <input type="text" onChange={(event) => this.handleUsernameOnChange(event)} /></p>
          <p>Hometown: <input type="text" onChange={(event) => this.handleHometownOnChange(event)} /></p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
