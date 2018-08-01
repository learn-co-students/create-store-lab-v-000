import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props);

    this.state = {
        username: '',
        hometown: ''
      }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type:"ADD_USER",
      user: this.state
    })
  }

  handleChange = e => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit= {this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.username} name="username"/>
          <input type="text" onChange={this.handleChange} value={this.state.hometown} name="hometown"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
