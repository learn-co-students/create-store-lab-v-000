import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props);

    this.state={
      username: '',
      hometown: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
      }
    })
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event=> this.handleSubmit(event)}>
          <input 
            type="text"
            name="username"
            onChange={event=>this.handleOnChange(event)}
            value={this.state.username}
          />
          <input
            type="text"
            name="hometown"
            onChange={event => this.handleOnChange(event)}
            value={this.state.hometown}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
