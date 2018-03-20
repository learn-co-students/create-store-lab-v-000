import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      hometown: ''
    }
  }


handleChangeUsername = (event) => {
  this.setState({
    username: event.target.value
  })
}

handleChangeHometown = (event) => {
  this.setState({
    hometown: event.target.value
  })
}

onSubmit = (event) => {
  event.preventDefault()

  this.props.store.dispatch({
    type: 'ADD_USER',
    user: this.state
  })
;}


  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Username:</label>
          <input type="text" onChange={this.handleChangeUsername} value={this.state.username} />
          <label>Hometown:</label>
          <input type="text" onChange={this.handleChangeHometown} value={this.state.hometown} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
