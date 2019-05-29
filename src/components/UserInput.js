import React, { Component } from 'react';

class UserInput extends Component {

  constructor(){
    super();
    this.state={
      username: '',
      hometown: '',
    }
  }

  handleUsernameChange = (event) =>{
    this.setState({
      ...this.state,
      username: event.target.value,
    })
  }

  handleHometownChange = (event) => {
    this.setState({
      ...this.state,
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
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
        <form onSubmit={this.handleSubmit}>
          <label> Username:
          <input name='username' onChange={this.handleUsernameChange} type='text' value={this.state.username} />
          </label>
          <label> Hometown:
          <input name='hometown' onChange={this.handleHometownChange} value={this.state.hometown} type='text' />
          </label>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
