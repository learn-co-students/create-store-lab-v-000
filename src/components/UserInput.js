import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsernameChange(e){
    this.setState({username: e.target.value})
  }

  handleHometownChange(e){
    this.setState({hometown: e.target.value})
  }

  handleSubmit(e){
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <label>username</label>
          <input type="text" id="username" onChange={(e)=>this.handleUsernameChange(e)} value={this.state.username}/>
          <label>hometown</label>
          <input type="text" id="hometown" onChange={(e)=>this.handleHometownChange(e)} value={this.state.hometown}/>
        </form>
      </div>
    );
  }
};

export default UserInput;
