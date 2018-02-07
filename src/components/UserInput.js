import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state={
      username: "",
      hometown: ""
    }
  }

  handleChangeName(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleChangeHometown(event) {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
    this.setState({
      username: "",
      hometown: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Username: </label>
            <input
              type="text"
              onChange={(event) => this.handleChangeName(event)}/>
          </p>
          <p>
            <label>Hometown: </label>
            <input
              type="text"
              onChange={(event) => this.handleChangeHometown(event)}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
