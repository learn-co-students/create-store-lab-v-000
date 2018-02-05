import React, { Component } from 'react';

class UserInput extends Component {
    constructor(props) {
      super(props);

    this.state = {
      username: '',
      hometown: ''
    };
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
      username: '',
      hometown: ''
    });

  }

  handleNameChange(event) {
    this.setState({
      username: event.target.value,
    })
  }

  handleHometownChange(event) {
    this.setState({
      hometown: event.target.value,
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input type="text" name="username" onChange={(event) => this.handleNameChange(event)}>
        </input>
        <input type="text" name="hometown" onChange={(event) => this.handleHometownChange(event)}>
        </input>
        <input type="submit" />
      </form>
      </div>
    );
  }
};

export default UserInput;
