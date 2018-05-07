import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      hometown: ''
    }
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleHometownChange = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
          <input type='text' value={this.state.hometown} onChange={this.handleHometownChange} />
        </form>
      </div>
    );
  }
};

export default UserInput;
