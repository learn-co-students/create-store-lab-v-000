import React, { Component } from 'react';



class UserInput extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleSubmit = event => {event.preventDefault(); this.props.store.dispatch({type: 'ADD_USER', user:
   {username: this.state.username, hometown: this.state.hometown}})}
  handleUsernameChange = (event) => {this.setState({username: event.target.value})}
  handleHometownChange = (event) => {this.setState({hometown: event.target.value})}



  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='username' onChange={this.handleUsernameChange} />
        <input type='text' name='hometown' onChange={this.handleHometownChange} />
        <input type='submit' value='submit' />
      </form>
        {this.state.username} username
      </div>
    );
  }
};

export default UserInput;
