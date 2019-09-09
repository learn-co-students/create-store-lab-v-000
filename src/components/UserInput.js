import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
    
    this.setState({
      username: '',
      hometown: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Username: </label>
          <input onChange={(event) => this.handleChange(event)} value={this.state.username} type='text' name='username' />
          <label>Hometown: </label>
          <input onChange={(event) => this.handleChange(event)} value={this.state.hometown} type='text' name='hometown' />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
