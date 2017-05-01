import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleHometownChange(e) {
    this.setState({
      hometown: e.target.value
    })
  }

  handleSubmit(e) {
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
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input value={this.state.username} onChange={(event)=>this.handleChange(event)} type='text' />
        <input value={this.state.hometown} onChange={(event)=>this.handleHometownChange(event)} type='text' />
        <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
