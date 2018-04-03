import React, { Component } from 'react';

class UserInput extends Component {

  constructor() {
  	super();
  	this.state={
  	  username: '',
  	  hometown: ''
  	}
  };

  handleNameChange = (event) => {
  	this.setState({
  		username: event.target.value, 
  		hometown: this.state.hometown
  	});
  };

  handleHometownChange = (event) => {
  	this.setState({
  		username: this.state.username,
  		hometown: event.target.value
  	});
  };

  handleSubmit = (event) => {
  	event.preventDefault();
  	this.props.store.dispatch({
  		type: 'ADD_USER',
  		user: this.state
  	})
  	this.setState({
  		username: '',
  		hometown: ''
  	})
  }

  render() {
    return(
      <div>
	      <form onSubmit={this.handleSubmit}>
	        <label>Username</label>
	        <input type="text" onChange={this.handleNameChange} />
	        <label>Hometown</label>
	        <input type="text" onChange={this.handleHometownChange} />
	       </form>
      </div>
    );
  }
};

export default UserInput;
