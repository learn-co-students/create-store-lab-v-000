import React, { Component } from 'react';


class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUserChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handleTownChange = event => {
    this.setState({
      hometown: event.target.value
    })
  }

  HandleOnSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })

    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.HandleOnSubmit}>

        <label>Username</label>
          <input type="text"  onChange={this.handleUserChange}/>

        <label>Hometown</label>
        <input type="text" onChange={this.handleTownChange} />

        <input type="submit" />
        </form>
      </div>
    );
  }
};


export default UserInput;
