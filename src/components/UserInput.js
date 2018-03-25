import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()
    this.state = {
        username: '',
        hometown: ''
    }
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleOnSubmit = e => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }
  
  render() {
    return(
      <div>
        <form 
          onSubmit={e => this.handleOnSubmit(e)}>
          <label>Username</label>
          <input 
            type='text'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={e => this.handleChange(e)}/><br/><br/>
          <label>Hometown</label>
          <input 
            type='text'
            name='hometown'
            placeholder='hometown'
            value={this.state.hometown}
            onChange={e => this.handleChange(e)}/>
          
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default UserInput;
