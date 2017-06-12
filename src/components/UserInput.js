import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()
    this.state = {
      hometown: '',
      username: ''
    }
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleHometown(event) {
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
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Username</label>
          <input type="text" onChange={(event) => this.handleUsername(event)} />
          <br />
          <label>Hometown</label>
          <input type="text" onChange={(event) => this.handleHometown(event)} />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
