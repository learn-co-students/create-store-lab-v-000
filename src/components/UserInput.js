import React, { Component } from 'react';

class UserInput extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			hometown: ''
		}
	}

	handleOnChangeUsername = (e) => {
		this.setState({
			username: e.target.value
		})
	}

	handleOnChangeHometown = (e) => {
		this.setState({
			hometown: e.target.value
		})
	}

	handleOnSubmit = (e) => {
		e.preventDefault()

		this.props.store.dispatch({
			type: 'ADD_USER',
			user: {
				username: this.state.username,
				hometown: this.state.hometown
			}
		})
		this.setState({hometown: '', username: ''})
	}

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        	<input type="text" onChange={this.handleOnChangeUsername} value={this.state.username}/>
        	<input type="text" onChange={this.handleOnChangeHometown} value={this.state.hometown}/>
        	<input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
