import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  }

  handleTownChange = (event) => {
    this.setState({
      hometown: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
      },
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <p>
            <label>Username: </label>
            <input type="text" onChange={this.handleUserChange} />
          </p>
          <p>
            <label>Hometown: </label>
            <input type="text" onChange={this.handleTownChange} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
