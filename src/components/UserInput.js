import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: '',
    }
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
     user: {
       username: this.state.username,
       hometown: this.state.hometown,
     }
   });
   this.setState({
     username: '',
     hometown: ''
   });
 }


  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" name="username" onChange={(event) => this.handleOnChange(event)}/>
          <input type="text" name="hometown" onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
