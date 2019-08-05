import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    });
    this.setState({
      username: '',
      hometown: ''
    });
  }


  render() {
    return(
      <div>
        <h3>Add User</h3>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={(event) => this.handleOnChange(event)}
            placeholder="Username" />
          <br />
          <input
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={(event) => this.handleOnChange(event)}
            placeholder="Hometown" />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
