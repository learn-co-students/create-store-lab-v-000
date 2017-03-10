import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    const { username, hometown } = this.state
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username,
        hometown
      }
    })
    this.setState({username: '', hometown: ''})
  }

  handleUserChange(e) {
    this.setState({username: e.target.value})
  }
  handleHomeChange(e) {
    this.setState({hometown: e.target.value})
  }
  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input value={this.state.username} onChange={(e) => this.handleUserChange(e)} type="text" />
          <input value={this.state.hometown} onChange={(e) => this.handleHomeChange(e)} type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
