import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      hometown: ''
    }
  }
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleHometownChange = (e) => {
    this.setState({
      hometown: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({ type: 'ADD_USER', user: this.state });
    this.setState = {
      username: '',
      hometown: ''
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type='text' onChange={this.handleUsernameChange} value={this.state.username} />
          <input type='text' onChange={this.handleHometownChange} value={this.state.hometown} />
          <input type='submit' value='Create User' />
        </form>
      </div>
    );
  }
};

export default UserInput;
