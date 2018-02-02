import React, { Component } from 'react';

class UserInput extends Component { 
  constructor() {
        super(); 
    
    this.state = {
      username: "", 
      hometown: "",
    };
  } 
  
  handleUsernameChange(event) {
  this.setState({
    username: event.target.value
  });
};

handleHometownChange(event) {
  this.setState({
    hometown: event.target.value
  });
};
  
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER', 
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
      },
    });
    this.setState({
      username: '',
      hometown: '',
    });
  }
  
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <label>add user</label>
            <input type="text" value= "username" onChange={(event) => this.handleUsernameChange(event)} />
            <input type="text" value= "hometown" onChange={(event) => this.handleHometownChange(event)} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
