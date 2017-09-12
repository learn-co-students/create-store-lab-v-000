import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		username: '',
  		hometown: '',
  	}
  }

  handleChange(event) {
  	debugger;
 	if (event.target.name === "username" ){
 		this.setState({
      		username: event.target.value,
    	});
 	}else if(event.target.name === "hometown"){
		this.setState({
      		hometown: event.target.value,
    	}); 		
 	}
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
        <form onSubmit={event => this.handleOnSubmit(event)}>
        	<label>Username</label>
        	<input type="text" name="username" onChange={event => this.handleChange(event)} /><br/>
        	<label>hometown</label>
        	<input type="text" name="hometown" onChange={event => this.handleChange(event)}/><br/>
        	<input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
