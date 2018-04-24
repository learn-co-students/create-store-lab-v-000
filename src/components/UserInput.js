import React, { Component } from "react";

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      hometown: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = () => {
    this.props.store.dispatch({
      type: "ADD_USER",
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
    this.setState = {
      username: "",
      hometown: ""
    };
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
          <label>Hometown:</label>
          <input
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default UserInput;
