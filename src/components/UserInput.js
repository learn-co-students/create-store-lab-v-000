import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    })
  }

  handleHometownChange(event) {
    this.setState({
      hometown: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Create User</label>
          <p>
            <input
            type="text"
            onChange={(event) => this.handleUsernameChange(event)}
            placeholder="username" />
          </p>
          <p>
            <input
            type="text"
            onChange={(event) => this.handleHometownChange(event)}
            placeholder="hometown" />
          </p>
        </form>
      </div>
    );
  }
};

export default UserInput;
