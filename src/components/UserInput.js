import React, { Component } from 'react';

export default class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleOnUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleOnHometownChange(event) {
    this.setState({
      hometown: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    });
  }


  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <input type='text'
              placeholder='username'
              onChange={(event) => this.handleOnUsernameChange(event)} />
          </p>
          <p>
            <input
              type='text'
              onChange={(event) => this.handleOnHometownChange(event)}
              placeholder='hometown' />
          </p>
          <input type='submit' />
        </form>
      </div>
    );
  }
};
