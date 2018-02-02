import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
        <form onSubmit={(e) => this.handleOnSubmit(e)} >
          <label> Enter Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
            placeholder='username'
          />
          <label>Hometown: </label>
          <input
            type="text"
            name='hometown'
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
    );
  }
};

export default UserInput;
