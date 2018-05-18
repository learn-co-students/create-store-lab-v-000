import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      hometown: '',
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
    this.setState({
      username: '',
      hometown: '',
    })
  };

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' name='username' value={this.state.username} onChange={this.onChange} />
          <input type='text' name='hometown' value={this.state.hometown} onChange={this.onChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
