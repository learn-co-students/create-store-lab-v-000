import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      hometown: "",
    }

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleHomeChange = this.handleHomeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    })
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

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input type="text"
            onChange={this.handleUserChange} />
          <br/>
          <label>Hometown: </label>
          <input type="text"
            onChange={this.handleHomeChange} />
            <br/>
          <input type="submit" />
        </form>
        User {this.state.username}
        <br/>
        Home {this.state.hometown}
      </div>
    );
  }
};

export default UserInput;
