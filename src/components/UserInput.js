import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
    this.setState({
      username: '',
      hometown: '',
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
        <label>Username:</label>
          <input type="text" value ={this.state.username} name='username' onChange={event => this.handleChange(event)} />
        <label>Hometown:</label>
          <input type="text" value ={this.state.hometown} name='hometown' onChange={event => this.handleChange(event)} />
          <input type="submit" />

        </form>
      </div>
    );
  }
};

export default UserInput;
