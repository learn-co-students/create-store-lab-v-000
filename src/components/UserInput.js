import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsernameChange(ev) {
    this.setState({username: ev.target.value});
  }

  handleHometownChange(ev) {
    this.setState({hometown: ev.target.value});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {username: this.state.username, hometown: this.state.hometown}
    });
    this.setState({
      username: '',
      hometown: '',
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Username:</label>
          <input type="text" onChange={(event) => this.handleUsernameChange(event)} value={this.state.username} />
          <label>Hometown:</label>
          <input type="text" onChange={(event) => this.handleHometownChange(event)} value={this.state.hometown} />  
          <input type="submit" />        
        </form>
      </div>
    );
  }
};

export default UserInput;
