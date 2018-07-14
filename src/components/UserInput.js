import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          Username:
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={(event) => this.handleChange(event)}
          />
          <br />
          Hometown:
          <input
            type='text'
            name='hometown'
            value={this.state.hometown}
            onChange={(event) => this.handleChange(event)}
          />
          <br />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
