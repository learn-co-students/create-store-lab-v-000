import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      hometown: ""
    }
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleHomeChange = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Username: <input type="text" onChange={this.handleUserChange}/><br/>
          Hometown: <input type="text" onChange={this.handleHomeChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
