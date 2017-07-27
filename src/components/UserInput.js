import React, { Component } from 'react';

class UserInput extends Component {
	constructor() {
	  super();
	  this.state = {
	    username: '',
	    hometown: ''
	  };
	}

	handleNameChange(event) {
	  this.setState({
	    username: event.target.value
	  });
	};

	handleTownChange(event) {
	  this.setState({
	    hometown: event.target.value
	  });
	};

  handleOnSubmit(event) { 
    event.preventDefault(); 
    this.props.store.dispatch({ 
      type: 'ADD_USER', 
      user: this.state,
    });
    this.setState({username: '', hometown: ''});
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label>username</label>
            <input type="text" value={this.state.username} onChange={(event) => this.handleNameChange(event)}/>
            <label>hometown</label>
            <input type="text" value={this.state.hometown} onChange={(event) => this.handleTownChange(event)}/>   
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
