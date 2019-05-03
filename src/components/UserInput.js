import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
  	super();

  	this.state={
  		username: '',
  		hometown: ''
  	}
  }

  handleSubmit = (e)=> {
  	e.preventDefault();
    this.props.store.dispatch({type: 'ADD_USER', user: this.state})
  }

  handleNameChange = (e)=> {
  	this.setState({username: e.target.value})
  }

  handleHometownChange = (e)=> {
  	this.setState({hometown: e.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	  <label htmlFor="name">username</label>    	
    	  <input type="text" onChange={this.handleNameChange}/>
    	  <br/>
    	  <label htmlFor="hometown">hometown</label>    	
    	  <input type="text" onChange={this.handleHometownChange}/>
    	  <button type="submit">submit</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
