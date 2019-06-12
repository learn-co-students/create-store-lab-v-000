import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      hometown: '',
    }
  }
  

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch(
      {
        type: 'ADD_USER',
        user: this.state,
      }
    )
  }

  handleUsernameInputChange = (event) => {
    this.setState(
      {
        username: event.target.value,
      }
    )
  }

  handleHometownInputChange = (event) => {
    this.setState(
      {
        hometown: event.target.value,
      }
    )
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleFormSubmit} >
          Username: <input onChange={this.handleUsernameInputChange} type="text"/>
          Hometown: <input onChange={this.handleHometownInputChange} type="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
