import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleOnUsernameChange(ev) {
    this.setState({
      username: ev.target.value
    })
  }

  handleOnHometownChange(ev) {
    this.setState({
      hometown: ev.target.value,
    });
  }

  handleOnSubmit(ev) {
    ev.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text"
          onChange={(event) => this.handleOnUsernameChange(event)}
          placeholder="username" />
          <input type="text"
          onChange={(event) => this.handleOnHometownChange(event)}
          placeholder="hometown" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
