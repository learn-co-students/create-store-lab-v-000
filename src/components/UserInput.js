import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsernameField = (e) => {
    this.setState({ username: e.target.value })
  };

  handleHometownField = (e) => {
    this.setState({ hometown: e.target.value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleUsernameField} name="username" value={this.state.username}/><br/>
          <input type="text" onChange={this.handleHometownField} name="hometown" value={this.state.hometown}/><br/>
          <button>Add user</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
