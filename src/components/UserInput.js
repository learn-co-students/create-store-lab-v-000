import React, { Component } from 'react';

class UserInput extends Component {

  constructor(){
    super()
    this.state = {
      username: "",
      hometown: ""
    }
  }

  handleOnUserChange(ev) {

    this.setState({
      username: ev.target.value
    })
  }

  handleOnHometownChange(ev) {

    this.setState({
      hometown: ev.target.value
    })
  }

  handleOnSubmit(ev) {
    ev.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <form onSubmit={(ev) => this.handleOnSubmit(ev)}>
        <label>Username</label>
        <input
          type="text"
          value={this.state.username}
          onChange={(ev) => this.handleOnUserChange(ev)} /><br />
        <label>Hometown</label>
        <input
          type="text"
          value={this.state.hometown}
          onChange={(ev) => this.handleOnHometownChange(ev)} />
      </form>
    );
  }
};

export default UserInput;
