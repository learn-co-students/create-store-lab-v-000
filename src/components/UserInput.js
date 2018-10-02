import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      hometown: '',
    }
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  };

  handleUsernameOnChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleHometownOnChange = (e) => {
    this.setState({
      hometown: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e)=>this.handleOnSubmit(e)}>
          <input value={this.state.username} onChange={(e) => this.handleUsernameOnChange(e)} type="text"/>
          <input value={this.state.hometown} onChange={(e) => this.handleHometownOnChange(e)} type="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
