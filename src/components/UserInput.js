import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type='text' id='username' onChange={this.handleChange}/>
        <br />
        <label htmlFor="hometown">Hometown:</label>
        <input type='text' id='hometown' onChange={this.handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    );
  }
};

export default UserInput;
