import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
  	super(props);

  	this.state = {
  		username: '',
  		hometown: '',
  	}
  }


  handleUserChange = (e) => {
  	this.setState({
		username: e.target.value,
  	})
  }

  handleHometownChange = (e) => {
  	this.setState({
		hometown: e.target.value,
  	})
  }

  handleSubmit = (e) => {
	this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state, 
    });
  }

  render() {
    return(
      <div>
      	<form onSubmit={ (e) => { this.handleSubmit() } }>
      		Username: <input type="text" onChange={this.handleUserChange} value={this.state.text} />
      		Hometown: <input type="text" onChange={this.handleHometownChange} value={this.state.text} />
      		<input type="submit" />
      	</form>
      </div>
    );
  }
};

export default UserInput;
