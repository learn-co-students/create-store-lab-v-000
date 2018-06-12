import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      hometown: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
    this.setState({
      username: "",
      hometown: "",
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} id="newUserForm">
          <p><input onChange={(event) => this.handleChange(event)} value={this.state.username} type="text" placeholder="Username" name="username" /></p>
          <p><input onChange={(event) => this.handleChange(event)} value={this.state.hometown} type="text" placeholder="Hometown" name="hometown" /></p>
          <p><input type="submit" /></p>
        </form>
      </div>
    );
  }
};

export default UserInput;
