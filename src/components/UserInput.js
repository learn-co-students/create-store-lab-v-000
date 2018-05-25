import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
  	super();

  	this.state = {
  		username: '',
  		hometown: '',
  	};
  }

  handleOnChange(event) {
  	const { name, value } = event.target;
  	this.setState({
  		[name]: value,
  	});
  };

  handleOnSubmit(event) {
  	event.preventDefault();
  	this.props.store.dispatch({
  		type: 'ADD_USER',
  		user: {
  			username: this.state.username,
  			hometown: this.state.hometown
  		},
  	});
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        	<label>Username</label>
        	<input 
        		type="text" 
        		name="username"
        		onChange={(event) => this.handleOnChange(event)} 
        	/>
        	<input 
        		type="text"
        		name="hometown"
        		onChange={(event) => this.handleOnChange(event)}
        	/>	
        	<input type="submit" />
        </form>	
      </div>
    );
  }
};

export default UserInput;
