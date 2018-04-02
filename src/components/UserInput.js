import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      hometown: ""
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
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
            <lable>Username</lable>
            <input type="text" value={this.state.username} onChange={(event) => {this.handleChange(event)}}/>
          </p>
          <p>
            <lable>Hometown</lable>
            <input type="text" value={this.state.hometown} onChange={(event) => {this.handleChange(event)}}/>
          </p>
            <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
