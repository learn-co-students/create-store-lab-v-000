import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    })

  }

  render() {
    return(
      <div>
        <form onSubmit={(event)=>this.handleOnSubmit(event)}>
          <p>username: <input name="username" type="text" value={this.state.username} onChange={(event)=>this.handleOnChange(event)}/></p>
          <p>hometown: <input name="hometown" type="text" value={this.state.hometown} onChange={(event)=>this.handleOnChange(event)}/></p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
