import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props) 
    this.state = {
        hometown: '',
        username: '',
       
    }
  }
  
  handleHomeTown = (e) => {
    console.log(e.target.value);
    // debugger
    this.setState({
      hometown: e.target.value,
    });
  }
  
  
  handleUserName = (e) => {
    console.log(e.target.value);
    // debugger
    this.setState({
      username: e.target.value,
    });
  }
  
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER', 
      user: this.state,
    });
    this.setState({
        username: '',
        hometown: ''
    });
  }
  
  render() {
    return(
      <div>
        user input
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
         
          <input 
            type='text' 
            name='username'
            value={this.state.username} 
            onChange={(event) => this.handleUserName(event)} />
             
          <input 
            type='text' 
            name='hometown'
            value={this.state.hometown}
            onChange={(event) => this.handleHomeTown(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
