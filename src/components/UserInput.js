import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsernameChanges = (event) => {
    this.setState({
      username: event.target.value,
      hometown: this.state.hometown
    });
  }

  handleHometownChanges = (event) => {
    this.setState({
      hometown: event.target.value,
      username: this.state.username
    });
  }

 submitChanges = (event) => {
   event.preventDefault()
   this.props.store.dispatch({
     type: 'ADD_USER',
     user: {
       hometown: this.state.hometown,
       username: this.state.username
     }
   });
   this.setState({
     username: "",
     hometown: ""
   });
 }

  render() {
    return(
      <form onSubmit={(event) => this.submitChanges(event)}>
       <label>UserName: </label>
        <input type="text" onChange={(event)=> this.handleUsernameChanges(event)}/>
       <label>Hometown: </label>
        <input type="text" onChange={(event)=> this.handleHometownChanges(event)}/>
       <input type="submit"/>
      </form>
    );
  }
};

export default UserInput;
