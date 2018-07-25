import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
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
          <label>Name:</label>
          <input 
            type="text" 
            onChange={(event) => this.handleChange(event)} 
            name="username"
            value={this.state.username} />
          <br/>
          <label>Hometown:</label>
          <input 
            type="text" 
            onChange={(event) => this.handleChange(event)} 
            name="hometown"
            value={this.state.hometown} />
          <br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
