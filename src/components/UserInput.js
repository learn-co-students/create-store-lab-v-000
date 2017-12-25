import React, { Component } from 'react';

class UserInput extends Component {

  constructor() {
    super();

    this.state = {
      username: '',
      hometown: ''
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }

  handleUsername(event) {
    this.setState ({
      username: event.target.value
    })
  }

  handleHometown(event) {
    this.setState ({
      hometown: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" value={this.state.username} onChange={(event) => this.handleUsername(event)} />
          <input type="text" value={this.state.hometown} onChange={(event) => this.handleHometown(event)} />
        </form>
      </div>
    );
  }
};

export default UserInput;
