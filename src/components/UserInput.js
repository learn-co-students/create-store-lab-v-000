import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {username: '', hometown: ''};
  }

  handleOnChangeHometown(event) {
    this.setState({hometown: event.target.value});
  }

  handleOnChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    });
    this.setState({username: '', hometown: ''});
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input id='username' type='text' onChange={(event) => this.handleOnChangeUsername(event)} value={this.state.username} />
          <input id='hometown' type='text' onChange={(event) => this.handleOnChangeHometown(event)} value={this.state.hometown} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
