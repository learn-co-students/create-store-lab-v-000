import React, { Component } from 'react'

class UserInput extends Component {

    state = {
      username: '',
      hometown: ''
    }

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleOnSubmit = event => {
		event.preventDefault()
		// check that all field are filled in
		if ( !this.state.username ||
			 !this.state.hometown
		 	) { alert('All fields are required!') }

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
	    	<form onSubmit={this.handleOnSubmit}>
		    	<div>
		        	<input 
		        		type='text'
		        		id='username'
		        		name='username'
		        		value={this.state.username}
		        		placeholder='username'
		        		onChange={this.handleOnChange}
		        	/>
		       	</div> 
		       	<br />
		       	<div>
		        	<input 
		        		type='text'
		        		id='hometown'
		        		name='hometown'
		        		value={this.state.hometown}
		        		placeholder='hometown'
		        		onChange={this.handleOnChange}
		        	/>
		      	</div>
		      	<br />
		      	<div>
		      		<input type='submit' />
		      	</div>
		    </form>
	    )
	}
}

export default UserInput
