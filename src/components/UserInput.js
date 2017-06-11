import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
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

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handleHometownChange(e) {
    this.setState({
      hometown: e.target.value,
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <label>Username</label>
          <input 
            type="text"
            value={this.state.username}
            onChange={(event) => this.handleUsernameChange(event)} />
          <label>Hometown</label>
          <input
            type="text"
            value={this.state.hometown}
            onChange={(event) => this.handleHometownChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
