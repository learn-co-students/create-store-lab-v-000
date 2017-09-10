import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
  	super(props);
    
    this.state ={
    	username: "",
    	hometown: "",
    }
  }

  handleChangeUsername(event) {
  	this.setState({
  		username: event.target.value
  	});
  }	
  
  handleChangeHometown(event) {
  	this.setState({
  		hometown: event.target.value
  	});
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    });
}	
  
  render() {
    return(
      <div>
      	<form onSubmit={(event) => this.handleOnSubmit(event)}>
	      	Username:
	        <input type="text"  onChange={(event) => this.handleChangeUsername(event)}></input>
	        Hometown:
	        <input type="text"  onChange={(event) => this.handleChangeHometown(event)}></input>
      		<input type="submit" />
      	</form>
      </div>
    );
  }
};

export default UserInput;
