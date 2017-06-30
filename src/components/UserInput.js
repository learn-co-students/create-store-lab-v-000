import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)
      this.state={
        username: '',
        hometown: ''
      }
  }
  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    })
  }

  handleHometownChange(event){
    this.setState({
      hometown: event.target.value
    })
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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="username" onChange={this.handleUsernameChange.bind(this)} value={this.state.username}/>
          <input type="text" name="hometown" onChange={this.handleHometownChange.bind(this)} value={this.state.hometown}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
