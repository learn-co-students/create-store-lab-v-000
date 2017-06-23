import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
  	super()
  	this.state={
  		username: '',
  		hometown: ''
  	}
  }
  
  handleSubmit=event=>{
  	event.preventDefault();
  	this.props.store.dispatch({
  		type: 'ADD_USER',
  		user: this.state
  	})
  	this.setState({
  		username: '',
  		hometown: ''
  	})
  }

  handleHometown=(e)=>{
    this.setState({
      hometown: e.target.value
    })
  }

  handleUsername=(e)=>{
  	this.setState({
      username: e.target.value
  	})
  }

  render() {
    return(
      <div>
        <form onSubmit={event=>this.handleSubmit(event)}>
          <p>Username: <input type="text" value={this.state.username} onChange={this.handleUsername}/></p>
          <p>Hometown: <input type="text" value={this.state.hometown} onChange={this.handleHometown}/></p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
