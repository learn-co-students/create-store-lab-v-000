import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleOnUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleOnHometownChange(event) {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
    this.setState({
      username: '',
      hometown: '',
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <h2>Add User</h2>
          <p>
            <label>Username</label><br />
            <input
              type='text'
              onChange={event => this.handleOnUsernameChange(event)}
            />
          </p>
          <p>
            <label>Hometown</label><br />
            <input
              type='text'
                onChange={event => this.handleOnHometownChange(event)}
            />
          </p>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
