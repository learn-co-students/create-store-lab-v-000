import React, { Component } from 'react';

class UserInput extends Component {
	constructor() {
		super()

		this.state = {
			username: '',
			hometown: ''
		}
	}

	handleNameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleTownChange(event) {
    this.setState({
      hometown: event.target.value
    });
  }


	handleOnSubmit = event => {
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER', 
      user: {
      	username: this.state.username,
      	hometown: this.state.hometown
      }
    });

    this.setState({
      username: '',
      hometown: ''
    });
	}

  render() {
    return(
      <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
      	<label>Username</label>
        <input type="text" onChange={event => this.handleNameChange(event)} value={this.state.username} />

        <label>Hometown</label>
        <input type="text" onChange={event => this.handleTownChange(event)} value={this.state.hometown} />
        <input type="submit" />
       </form>
      </div>
    );
  }
};

export default UserInput;
