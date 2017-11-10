import React, { Component } from 'react';

class UserInput extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			hometown: '',
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.store.dispatch({
			type: "ADD_USER",
			user: this.state,
		});

		this.setState({
			username: '',
			hometown: '',
		})
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

  render() {
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
      	<label htmlFor="hometown"> Hometown: </label> 
        <input 
        	type="text"
        	name="hometown" 
        	id="hometown"
        	value={this.state.hometown}
        	onChange={event => this.handleChange(event)}
      	/>
      	<br />
      	<label htmlFor="username"> Username: </label> 
        <input 
        	type="text"
        	name="username" 
        	id="username" 
        	value={this.state.username}
        	onChange={event => this.handleChange(event)}
      	/>
      	<br />
        <button type="submit">Submit</button>
      </form>
    );
  }
};

export default UserInput;
