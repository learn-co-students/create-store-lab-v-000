import React, { Component } from 'react';

export default class UserInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleOnSubmit(e){
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
    this.setState({text: ''});
  }

  handleOnChange(e){
    if (e.target.name === "username"){
      this.setState({username: e.target.value, hometown: this.state.hometown});
    } else {
      this.setState({hometown: e.target.value, username: this.state.username});
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input
            id="username"
            name="username"
            type="text"
            value={this.state.username}
            placeholder="Enter username"
            onChange={event => this.handleOnChange(event)}
          /><br />
          <input
            id="hometown"
            name="hometown"
            type="text"
            value={this.state.hometown}
            placeholder="Enter hometown"
            onChange={event => this.handleOnChange(event)}
          /><br />
          <input type="submit" />
        </form>
      </div>
    );
  }
};
