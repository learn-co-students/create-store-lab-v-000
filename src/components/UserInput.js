import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleHometownChange(event){
    this.setState({username: event.target.value})
  }

  handleUsernameChange(event){
     this.setState({hometown: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={ (event) => this.handleSubmit(event) }>
        <input type="text" onChange={ (event) => this.handleHometownChange(event) } />
        <input type="text" onChange={ (event) => this.handleUsernameChange(event) }/>
        <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
