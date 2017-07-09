import React, { Component } from 'react';

class UserInput extends Component {
	constructor(props) {
    super(props);

    this.state = { 
      username: '', 
      hometown: '',
    };
  }

  handleOnSubmit(event) {
  	event.preventDefault(); 
  	this.props.store.dispatch({
  		type: 'ADD_USER', 
  		user: this.state, 
  	})
  }

  handleOnUChange(event) {
  	this.setState({
  		username: event.target.value,
  	})
  }

  handleOnHChange(event) {
  	this.setState({
  		hometown: event.target.value,
  	})
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p> <input value={this.state.text} type="text" onChange={(event) => this.handleOnUChange(event)} /> </p>
        <p> <input type="text" onChange={(event) => this.handleOnHChange(event)} /> </p>
        <p> <input type="submit" /> </p>
        </form>
      </div>
    );
  }
};

export default UserInput;
