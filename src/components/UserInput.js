import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state = {username: '', hometown: ''}
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({type: 'ADD_USER', user: {username: this.state.username, hometown: this.state.hometown}})
    this.setState({username: '', hometown: ''})
  }

  handleUsernameChange = (e) => {
    this.setState({ ...this.state, username: e.target.value })
  }

  handleHometownChange = (e) => {
    this.setState({ ...this.state, hometown: e.target.value })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <label>Username:</label>
          <input value={this.state.username} onChange={(e) => this.handleUsernameChange(e)} type='text' />
          <label>Hometown:</label>
          <input value={this.state.hometown} onChange={(e) => this.handleHometownChange(e)} type='text' />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
