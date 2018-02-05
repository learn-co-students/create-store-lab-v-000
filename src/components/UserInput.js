import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
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
      user: this.state,
    });
  }

  render() {
    return(
      <div>
        <h5>Sign Up</h5>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>username</label>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={(event) => this.handleOnChange(event)}
            placeholder='username' />
          <label>hometown</label>
          <input
            type='text'
            name='hometown'
            value={this.state.hometown}
            onChange={(event) => this.handleOnChange(event)}
            placeholder='username'/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
