import React, { Component } from 'react';

class UserInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			hometown: '',
		};
	}

	handleUserNameChange(event) {
		this.setState({
			username: event.target.value,
		});
	}

	handleHometownChange(event) {
		this.setState({
			hometown: event.target.value,
		});
	}

	handleOnSubmit(event) {
		event.preventDefault();
		this.props.store.dispatch({
			type: 'ADD_USER',
			user: {
				username: this.state.username,
				hometown: this.state.hometown,
			},
		});
		this.setState({
			username: '',
			hometown: '',
		});
	}

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input name="username" type="text" value={this.state.username} onChange={(event) => this.handleUserNameChange(event)} />
          <input name="hometown" type="text" value={this.state.hometown} onChange={(event) => this.handleHometownChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
