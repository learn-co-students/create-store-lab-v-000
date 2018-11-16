import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange = (event) => {
      if (event.target.name === "username"){
      this.setState({username: event.target.value, hometown: this.state.hometown});
    } else {
      this.setState({hometown: event.target.value, username: this.state.username});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
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


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          />

          <br/>

          <input type="text"
          name="hometown"
          value={this.state.hometown}
          onChange={this.handleChange}
          />

          <br/>

          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
