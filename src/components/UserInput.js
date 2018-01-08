import React, { Component } from 'react';

class UserInput extends Component {
constructor(props){
  super(props)

  this.state = {
    username: '',
    hometown: '',
  }
}

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleHometownChange = (event) => {
    this.setState({
      hometown:event.target.value
    })
  }

  handleOnSubmit = (event) =>{
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
        <form onSubmit={this.handleOnSubmit}>
        <p>Enter Name </p>
        <input type="text"
        value={this.state.username}
        onChange={this.handleUsernameChange}/>
        <p>Enter Hometown</p>
        <input type="text"
        value={this.state.hometown}
        onChange={this.handleHometownChange}/>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
