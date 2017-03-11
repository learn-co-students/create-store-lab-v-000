import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleNameChange(ev) {
    this.setState({
      username: ev.target.value
    })
  }

  handleTownChange(ev) {
    this.setState({
      hometown: ev.target.value
    })
  }

  handleOnSubmit(ev) {
    ev.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <h3>Username:</h3>
          <input type='text' value={this.state.username} onChange={this.handleNameChange.bind(this)} /> <br />
          <h3>Hometown:</h3>
          <input type='text' value={this.state.hometown} onChange={this.handleTownChange.bind(this)}/> <br />
          <input type='submit' />
        </form>

      </div>
    );
  }
};

export default UserInput;
