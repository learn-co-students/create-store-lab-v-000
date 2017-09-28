import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleUsernameOnChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleHometownOnChange = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <input type='text' 
                 placeholder='Username' 
                 value={this.state.username}
                 onChange={(event) => this.handleUsernameOnChange(event)} />
          <input type='text' 
                 placeholder='Hometown' 
                 value={this.state.hometown}
                 onChange={(event) => this.handleHometownOnChange(event)} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
