import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)

    this.state={
      username: '',
      hometown: ''
    }
  }
  handleUsername(e){
    this.setState({
      username: e.target.value,
    })
  }
  handleHometown(e){
    this.setState({
      hometown: e.target.value,
    })
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
      }      
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <label>username</label>
          <input type='text' onChange={(e)=>this.handleUsername(e)} value={this.state.username}/>
          <label>hometown</label>
          <input type='text' onChange={(e)=>this.handleHometown(e)} value={this.state.hometown}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
