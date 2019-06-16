import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    username: '',
    hometown: ''
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={(event) => this.handleChange(event)} />

          <label>Hometown:</label>
          <input
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={(event) => this.handleChange(event)}/>

          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
