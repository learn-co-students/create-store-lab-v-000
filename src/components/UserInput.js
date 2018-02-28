import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state= {
      username: '',
      hometown: ''
    }
  }
  handleNameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  handleHTChange = (e) => {
    this.setState({
      hometown: e.target.value
    })
  }
  handleSubmit = (e) => {
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
    this.setState({
      username: '',
      hometown: ''
    })
    e.preventDefault();
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          Username: <input type="text" onChange={this.handleNameChange} value={this.state.username} /><br/>
          Hometown: <input type="text" onChange={this.handleHTChange} value={this.state.hometown} /><br/>
          <input type="submit" value="Add user"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
