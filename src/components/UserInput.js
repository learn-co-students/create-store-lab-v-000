import React, { Component } from 'react';

class UserInput extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			hometown: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.store.dispatch({ type:'ADD_USER', user: this.state })
	}

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        	<label>Username</label>
        	<input type="text" name="username" onChange={this.handleChange} />
        	<label>Hometown</label>
        	<input type="text" name="hometown" onChange={this.handleChange} />
        	<input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
