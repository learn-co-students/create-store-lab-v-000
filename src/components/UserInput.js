import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
  	super(props)

  	this.state = {
  		username: '',
  		hometown: '',
  	};
  }

  handleOnChange(event) {
  	this.setState({
  		[event.target.name]: event.target.value,
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
          <p>
        	<input 
        		type="text"
        		onChange={(event) => this.handleOnChange(event)} 
        		value={this.state.username}
        	/>
          </p>
          <p>
            <input
            	type="text"
            	onChange={(event) => this.handleOnChange(event)}
        		value={this.state.hometown}
        	/>
          </p>
        	<input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
