import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleOnChangeUserName(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleOnChangeHometown(event) {
    this.setState({
      hometown: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChangeUserName(event)}/>
          <br />
          <input type="text" onChange={(event) => this.handleOnChangeHometown(event)}/>
          <br />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
