import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      hometown: ''
    }
  }
  
  handleUserChange(event){
    this.setState({
      username: event.target.value
    });
  }
  
  handleHometownChange(event){
    this.setState({
      hometown: event.target.value
    });
  }
  
  handleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={(event)=> this.handleSubmit(event)} >
          Enter Username:
          <input type="text" onChange={(event)=> this.handleUserChange(event)} />
          Enter Hometown:
          <input type="text" onChange={(event)=> this.handleHometownChange(event)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
