import React, { Component } from 'react';

class UserInput extends Component {
  
  constructor(props) {
  	super(props)

  	this.state = {
  		username: '',
  		hometown: '',
  	}
  }

  handleOnNameChange(event) {
  	this.setState({
  		[event.target.name]: event.target.value,
  	})
  }

  handleOnHometownChange(event) {
  	this.setState({
  		[event.target.name]: event.target.value,
  	})
  }

  handleOnSubmit(event) {
  	event.preventDefault(); 
  	this.props.store.dispatch({
  		type: 'ADD_USER', 
  		user: this.state,
  	}); 
  	this.setState({
  		username: '',
  		hometown: '',
  	})
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
	        <input name="username" type="text" onChange={(event) => this.handleOnNameChange(event)} />
	        <input name="hometown" type="text" onChange={(event) => this.handleOnHometownChange(event)} />
	        <input type="submit" />
       	</form> 
      </div>
    );
  }
};

export default UserInput;
