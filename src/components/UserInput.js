import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleChange = (e) => {
    const inputID = e.target.name
    switch (inputID) {
      case "hometown":
        this.setState({hometown: e.target.value})
        break;
      case "username":
        this.setState({username: e.target.value})
        break;
      default:
        return undefined
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text"
          name="username"
          onChange={this.handleChange}
          value={this.state.username}/>
          <br/>

          <label>Hometown:</label>
          <input type="text"
          name="hometown"
          onChange={this.handleChange}
          value={this.state.hometown}/>
          <br/>

          <input type="submit" />

        </form>
      </div>
    );
  }
};

export default UserInput;
