import React, { Component } from 'react';

class UserInput extends Component {
constructor(props){
  super(props)

  this.state = {
    username: '',
    hometown: '',
  }
}

  handleInputChange = (event) => {
    if (event.target.name === "username"){
      this.setState({username: event.target.value})
    } else if (event.target.name === "hometown"){
      this.setState({hometown: event.target.value})
    }
  }

  handleOnSubmit = (event) =>{
  event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state

  })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <p>Enter Name </p>
        <input type="text"
        name="username"
        value={this.state.username}
        onChange={this.handleInputChange}/>
        <p>Enter Hometown</p>
        <input type="text"
        name="hometown"
        value={this.state.hometown}
        onChange={this.handleInputChange}/>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
