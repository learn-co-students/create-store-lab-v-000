import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={event => this.handleChange(event)}
          />
          <input
            type="text"
            name="hometown"
            placeholder="hometown"
            onChange={event => this.handleChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
