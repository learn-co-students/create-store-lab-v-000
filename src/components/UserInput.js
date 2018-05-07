import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      hometown: ''
    }
  }
  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleHometown = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleOnSubmit = (event) => {
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
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Username: </label>
          <input type='text' value={this.state.username} onChange={this.handleUsername} />
          <br></br>
          <br></br>
          <label>Hometown: </label>
          <input type='text' value={this.state.hometown} onChange={this.handleHometown} />
          <br></br>
          <br></br>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
