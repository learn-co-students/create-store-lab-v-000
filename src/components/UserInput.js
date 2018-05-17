import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      hometown: ''
    }

  }

  handleUsername = (e) =>{
    this.setState({
      username: e.target.value
    })
  }

  handleHometown = (e) =>{
    this.setState({
      hometown: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      },
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Username:
          <input type="text" onChange={this.handleUsername} />
          <br></br>
          Hometown:
          <input type="text" onChange={this.handleHometown}/>
          <br></br>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
