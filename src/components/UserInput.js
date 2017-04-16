import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsernameChange(e){
    this.setState({
      username: e.target.value
    })
  }

  handleHometownChange(e){
    this.setState({
      hometown: e.target.value
    })
  }

  handleOnSubmit(e){
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type='text' onChange={(event)=>this.handleUsernameChange(event)} />
          <input type='text' onChange={(event) => this.handleHometownChange(event)} />
          <input type='submit'  />
        </form>
      </div>
    );
  }
};

export default UserInput;
