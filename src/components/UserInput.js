import React, { Component } from 'react';

class UserInput extends Component {
   constructor(){
    super()
    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleChange(event){
   const value = event.target.name
    this.setState({
     [value]: event.target.value,
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    })

  }
  render() {
    return(
      <div>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <input type="text" id="username" value={this.state.username} onChange={(event)=>this.handleChange(event)}/>
          <input type="text" id="hometown" value={this.state.hometown} onChange={(event)=>this.handleChange(event)}/>
          <input type="submit"/>
          </form>
      </div>
    );
  }
};

export default UserInput;
