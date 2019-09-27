import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user:  this.state
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Username </label>
            <input type="text" name="username" onChange={(event) => this.handleChange(event)} />
            <label>Hometown </label>
            <input type="text" name="hometown" onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
