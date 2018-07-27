import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleHometownChange = (event) => {
    console.log(event);
    this.setState({
      hometown: event.taget.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
    this.setState({
      username: '',
      hometown: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <label>Username:</label>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange} />
          <br />
          <label>Hometown</label>
          <input
            type='text'
            name='hometown'
            value={this.state.hometown}
            onChange={this.handleChange} />
          <br />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
