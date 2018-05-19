import React, { Component } from 'react';

class UserInput extends Component {

  constructor(){
    super();
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleTownChange = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {username: this.state.username, hometown: this.state.hometown}
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text" onChange={this.handleNameChange} value={this.state.username} />
          <label>Hometown</label>
          <input type="text" onChange={this.handleTownChange} value={this.state.hometown} />
        </form>
      </div>
    );
  }
};

export default UserInput;
