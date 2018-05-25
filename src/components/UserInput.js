import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleChange(event) {
    this.setState ({
      [event.target.name]: event.target.value
    });
  }

    handleSubmit(event){
      event.preventDefault();
      this.props.store.dispatch({
        type: 'ADD_USER',
        user: this.state,
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
        <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.username} name="username" placeholder="username"></input>
        <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.hometown} name="hometown" placeholder="hometown"></input>
        <input type="submit"></input>
      </form>
      </div>
    );
  }
};

export default UserInput;
