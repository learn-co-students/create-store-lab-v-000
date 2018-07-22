import React, { Component } from 'react';

class UserInput extends Component {
	 constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleOnChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  }

   handleOnChangeHome = (event) => {
    this.setState({
      hometown: event.target.value,
    });
  }

  handleOnSubmit = (event) => {
  event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER', 
      user: {
        username: this.state.username,
        hometown: this.state.hometown
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
      Username:
        <form onSubmit={(event) => this.handleOnSubmit(event)}>username<input type="text" name="username" onChange={this.handleOnChange}/>hometown<input type="text" name="hometown" onChange={this.handleOnChangeHome}/></form>
      </div>
    );
  }
};

export default UserInput;
