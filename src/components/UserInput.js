import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      hometown: "",
    }
  }

  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    })
  }

  handleOnChangeHometown = (event) => {
    this.setState({
      hometown: event.target.value,
    })
  }

  handleOnSubmit = (event) => {
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
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={(event) => this.handleOnChangeUsername(event)}
          />
          <br />
          <input
            type="text"
            placeholder="hometown"
            name="hometown"
            value={this.state.hometown}
            onChange={(event) => this.handleOnChangeHometown(event)}
          />
          <br />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
