import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      hometown: "",
    }
  }

  handleNameChange(event) {
    this.setState({
      username: event.target.value,
    })
  }

  handleHomeChange(event) {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    });
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type="text"
          value={ this.state.username }
          onChange={(event) => this.handleNameChange(event)}
        />
        <input
          type="text"
          value={ this.state.hometown }
          onChange={(event) => this.handleHomeChange(event)}
        />
        <input type="submit" />
      </form>
    );
  }
};

export default UserInput;
