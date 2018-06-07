import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleHometownChange = (e) => {
    this.setState({
      hometown: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })

    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <label>Username:</label>
          <input type='text' onChange={(e) => this.handleUsernameChange(e)}></input>

          <label>Hometown:</label>
          <input type='text' onChange={(e) => this.handleHometownChange(e)}></input>

          <input type='submit'></input>
        </form>
        {console.log(this.state)}
      </div>

    );
  }
};

export default UserInput;
