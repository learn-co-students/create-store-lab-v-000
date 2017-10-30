import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleInput(event)} name="username" />
          <input type="text" onChange={(event) => this.handleInput(event)} name="hometown" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
