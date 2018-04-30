import React, { Component } from 'react';

class UserInput extends Component {

  constructor() {
    super();

  this.state = {
    username: '',
    hometown: '',
  }
}

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
    this.setState({
      username: '',
      hometown: '',
    });
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Username: </label>
          <input type="text" name="username" value={this.state.username} onChange={(event) => this.handleOnChange(event)} />
          <label>Hometown: </label>
          <input type="text" name="hometown" value={this.state.hometown} onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
        {this.state.username}<br />
        {this.state.hometown}
      </div>
    );
  }
};

export default UserInput;
