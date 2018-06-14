import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){ 
    super(); 

    this.state = { 
      username: '', 
      hometown: ''
    }
  
  }

  handleChange = (event) => { 
    this.setState({ 
      [event.target.name]: event.target.value 
    });
  }

  handleSubmit = (event) => { 
    event.preventDefault(); 
    this.props.store.dispatch({ 
      type: 'ADD_USER', 
      user: this.state,
    }); 
    this.setState({ 
      username:'', 
      hometown:''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}> 
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Username" /> 
        <input type="text" name="hometown" value={this.state.hometown} onChange={this.handleChange} placeholder="Enter Hometown" /> 
        <input type="submit" /> 
        </form>
      </div>
    );
  }
};

export default UserInput;
