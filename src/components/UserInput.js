import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props) {
    super();

    this.state = {
      username: '',
      hometown: ''
    };
  };

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
        hometown: this.state.hometown,
      }
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
        <label>User name </label>
          <input
            type='text'
            value={this.state.text}
            onChange={(event) => this.handleUsernameOnChange(event)} />
            <label>Hometown</label>
            <input
              type='text'
              value={this.state.value}
              onChange={(event) => this.handleHometownOnChange(event)} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
