import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleUserChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleHometownChange(event) {
    this.setState({
      hometown: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
      },
    });
    this.setState({
      username: '',
      hometown: '',
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={(event) => this.handleUserChange(event)}
            />
          </label>
          <label>
            Hometown:
            <input
              type="text"
              value={this.state.hometown}
              onChange={(event) => this.handleHometownChange(event)}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
