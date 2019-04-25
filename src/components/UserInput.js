import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsernameChange(e) {
    this.setState({
      ...this.state,
      username: e.target.value
    })
  }

  handleHometownChange(e){
    this.setState({
      ...this.state,
      hometown: e.target.value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
        <input type="text" onChange={(e) => this.handleUsernameChange(e)} />
        <input type="text" onChange={(e) => this.handleHometownChange(e)} />
        </form>
      </div>
    );
  }
};

export default UserInput;
