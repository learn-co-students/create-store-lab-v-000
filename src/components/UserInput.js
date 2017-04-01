import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hometown: '',
      username: '',
    };
  }

  handleOnHometownChange(event) {
    this.setState({
      hometown: event.target.value,
    });
  }

  handleOnUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER', 
      user: {
        hometown: this.state.hometown,
        username: this.state.username
      },
    });
    this.setState({
      hometown: '',
      username: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnUsernameChange(event)} value={this.state.username}/>
          <input type="text" onChange={(event) => this.handleOnHometownChange(event)} value={this.state.hometown}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;