import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      hometown: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleHometownChange = this.handleHometownChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange(ev) {
    this.setState({
      username: ev.target.value
    })
  }

  handleHometownChange(ev) {
    this.setState({
      hometown: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.props.store.dispatch({
      type: "ADD_USER",
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.username} name="username" onChange={this.handleUsernameChange} />
        <input type="text" value={this.state.hometown} name="hometown" onChange={this.handleHometownChange} />
        <input type="submit" />
      </form>
      </div>
    );
  }s
};

export default UserInput;
