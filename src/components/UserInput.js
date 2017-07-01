import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      hometown: ""
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

  handleSubmitForm(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state,
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmitForm(event)}>
          <input type="text" name="username" value={this.state.username} placeholder="username" onChange={(event) => this.handleOnUsernameChange(event)}/>
          <input type="text" name="hometown" value={this.state.hometown} placeholder="hometown" onChange={(event) => this.handleOnHometownChange(event)}/>
        </form>
      </div>
    );
  }
};

export default UserInput;
