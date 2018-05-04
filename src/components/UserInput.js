import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      hometown: ''
    }


  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = ()  => {
    this.props.store.dispatch({
      type: 'ADD_USER',
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
          <label>Username</label>
          <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
          <input type='text' name='hometown' value={this.state.hometown} onChange={this.handleChange}/>ì
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default UserInput;
