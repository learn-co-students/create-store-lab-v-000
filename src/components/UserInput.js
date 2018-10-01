import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      hometown: '',
    }
  }
  
  handleUserNameChange = (event) => {
    this.setState({
      ...this.state,
      username: event.target.value
    }, () => console.log(this.state.username))
  }

  handleHomeTownChange = (event) => {
    this.setState({
      ...this.state,
      hometown: event.target.value
    }, () => console.log(this.state.hometown))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({type: 'ADD_USER', user: { username: this.state.username, hometown: this.state.hometown }})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Username: <input type='text' onChange={this.handleUserNameChange}/>
          Hometown: <input type='text' onChange={this.handleHomeTownChange}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
