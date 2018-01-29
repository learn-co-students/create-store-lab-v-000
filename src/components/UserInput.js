import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  handleChangeHometown = (e) => {
    this.setState({
      hometown: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              onChange={this.handleChangeUsername}
              value={this.state.username}
            />
          </div>
          <div>
            <label>Hometown: </label>
            <input
              type="text"
              onChange={this.handleChangeHometown}
              value={this.state.hometown}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
