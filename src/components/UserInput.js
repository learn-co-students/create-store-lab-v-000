import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleChange(event) {
  	      console.log(event.target.name)
    if (event.target.name === 'username') {
	    this.setState({
	      username: event.target.value
	    });
	} else {
	    this.setState({
	      hometown: event.target.value
	    });		
	}

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER', 
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      },
    });
    this.setState({
      text: '',
      hometown: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Username: </label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.username} name="username" />
          <label>Hometown: </label>
          <input onChange={(event) => this.handleChange(event)} value={this.state.hometown} type='text' name='hometown' />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
