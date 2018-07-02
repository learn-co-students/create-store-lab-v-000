import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleUserChange(event) {
    this.setState({
      username: event.target.value,
    })
  }

  handleHomeChange(event) {
    this.setState({
      hometown: event.target.value,
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
    this.setState({
      username: '',
    });
  }

  render() {
    return(
      <div>
        user input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Username</label>
          <input type="text" onChange={(event) => this.handleUserChange(event)}/>
          <label>Hometown</label>
          <input type="text" onChange={(event) => this.handleHomeChange(event)}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
