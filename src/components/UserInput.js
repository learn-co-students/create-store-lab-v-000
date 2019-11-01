import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state={
      username: '',
      hometown: ''
    }
  }

  handleOnUsernameChange(ev){
    this.setState({
      username: ev.target.value
    })
  }

  handleOnHometownChange(ev){
    this.setState({
      hometown: ev.target.value
    })
  }
  handleOnSubmit(ev){
    ev.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })

  }
  render() {
    return(
      <div>
        <form onSubmit={(event)=>this.handleOnSubmit(event)}>
          <input type="text" value={this.state.username} onChange={(ev)=> this.handleOnUsernameChange(ev)} placeholder="username"></input>
          <input type="text" value={this.state.hometown} onChange={(ev)=> this.handleOnHometownChange(ev)} placeholder="hometown"></input>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
