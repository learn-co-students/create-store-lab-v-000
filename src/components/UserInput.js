import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
  super();

  this.state = {
    username: '',
    hometown: ''
  };
}

  handleUserChange(event) {
  this.setState({
    username: event.target.value
  });
};

  handleHometownChange(event) {
    this.setState({
      hometown: event.target.value
    })
  }

handleSubmit(event) {
  event.preventDefault();
  this.props.store.dispatch({
    type: 'ADD_USER',
    user: this.state
    });
}
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
            <label>Userame:</label>
            <input 
              type="text"
              value={this.state.username}
              onChange={(event) => this.handleUserChange(event)}/>
            <label>Hometown:</label>
            <input 
              type="text"
              value={this.state.hometown}
              onChange={(event) => this.handleHometownChange(event)}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
