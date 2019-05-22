import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state={
      username: '',
      hometown: ''
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleHometownChange = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
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
  }

  render() {
    return(
      <div>
        <form onSubmit={(event)=>{this.handleSubmit(event)} }>
          <input type="text" onChange={(event)=> this.handleUsernameChange(event)} />
          <input type="text" onChange={(event)=> {this.handleHometownChange(event)}} />
        </form>
      </div>
    );
  }
};

export default UserInput;
