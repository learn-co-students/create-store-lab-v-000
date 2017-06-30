import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)
      this.state={
        username: '',
        hometown: ''
      }
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }
  handleSubmit(event){
    event.preventDefault();
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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="username" onChange={this.handleChange.bind(this)} value={this.state.username}/>
          <input type="text" name="hometown" onChange={this.handleChange.bind(this)} value={this.state.hometown}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
