import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      hometown: '',
    }
  }

  usernameOnChange(ev) {
    this.setState({
      username: ev.target.value
    });
  }

  hometownOnChange(ev) {
    this.setState({
      hometown: ev.target.value
    });
  }

  handleOnSubmit(ev) {
    ev.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    });

    this.setState({
      username: '',
      hometown: '',
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(ev) => this.handleOnSubmit(ev)}>
          <label>Username
            <input name="username"
              type="text"
              value={this.state.username}
              onChange={(ev) => this.usernameOnChange(ev)} />
          </label>
          <label>Hometown
            <input name="hometown"
              type="text"
              value={this.state.hometown}
              onChange={(ev) => this.hometownOnChange(ev)} />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
