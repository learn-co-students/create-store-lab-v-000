import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleTown(event) {
    this.setState({
      hometown: event.target.value
    })
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Username: </label>
          <input
            type="text"
            onChange={(event) => this.handleUsername(event)}
            value={this.state.text} />
          <label>Hometown: </label>
          <input
            type="text"
            onChange={(event) => this.handleTown(event)} />
            value={this.state.text}
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
