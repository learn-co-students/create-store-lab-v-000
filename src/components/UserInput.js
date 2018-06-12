import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      hometown: '',
      username: ''
    }
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      [key]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        hometown: this.state.hometown,
        username: this.state.username
      }
    });
    this.setState({
      hometown: '',
      username: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          hometown:
          <input type="text" name="hometown" value={this.state.hometown} onChange={(event) => this.handleChange(event)} />
          <br/>
          username:
          <input type="text" name="username" value={this.state.username} onChange={(event) => this.handleChange(event)} />
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
