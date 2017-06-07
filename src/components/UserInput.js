import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value,
    })
  }

  handleHometown(e) {
    this.setState({
      hometown: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Username: </label>
          <input type='text' value={this.state.username} onChange={(e) => this.handleUsername(e)} />

          <label>Hometown: </label>
          <input type='text' value={this.state.hometown} onChange={(e) => this.handleHometown(e)} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
