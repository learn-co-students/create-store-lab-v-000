import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleUserOnChange(event) {
    this.setState({
      username: event.target.value,
    });
  }
  handleTownOnChange(event) {
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
        hometown: this.state.hometown
      },
    });
    this.setState({
      user: '',
      hometown: ''
    });
  }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleUserOnChange(event)} />
          <input type="text" onChange={(event) => this.handleTownOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
