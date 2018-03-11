import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
		super()
		this.state = {
			username: '',
			hometown: '',
		}
	}

	handleNameChange(event){
		this.setState({
			username: event.target.value,
		})
	}

	handleHomeChange(event){
		this.setState({
			hometown: event.target.value,
		})
	}

	handleSubmit(event){
		event.preventDefault()
		this.props.store.dispatch({
			type: 'ADD_USER',
			user: {
				username: this.state.username,
				hometown: this.state.hometown,
			}
		})

		this.setState({
			username: '',
			hometown: ''
		})
	}
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
	        <input type='text' onChange={(event) => this.handleNameChange(event)} value={this.state.username}/>
	        <input type='text' onChange={(event) => this.handleHomeChange(event)} value={this.state.hometown}/>
	        <input type='submit' />
	      </form>
      </div>
    );
  }
};

export default UserInput;
