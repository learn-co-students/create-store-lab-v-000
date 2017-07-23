import React, { Component } from 'react';

class UserInput extends Component {
  componentWillMount(){
    this.setState({
      username: "",
      hometown: ""
    })
  }

  updateUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  updateHometown = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" onChange={this.updateUsername} value={this.state.username}/>
        <input type="text" name="hometown" onChange={this.updateHometown} value={this.state.hometown}/>
        <input type="submit" />
      </form>
    );
  }
};

export default UserInput;
