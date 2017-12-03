import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()

    this.state = {
      username:'',
      hometown: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    debugger
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })

  }

  handleChange = (e) => {
    let field = e.target.name
    this.setState({
      [field]: e.target.value
    })

  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="username" type="text" onChange={this.handleChange} value={this.state.text}/>
          <input name="hometown" type="text" onChange={this.handleChange} value={this.state.text}/>
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
