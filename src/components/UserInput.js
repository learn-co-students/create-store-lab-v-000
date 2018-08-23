import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({type: 'ADD_USER', user: this.state});
    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="username" onChange={event => this.handleChange(event)} value={this.state.username} />
          <input type="text" name="hometown" onChange={event => this.handleChange(event)} value={this.state.hometown} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
