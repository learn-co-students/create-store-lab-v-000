import React, { Component } from 'react';
class UserInput extends Component {

  constructor(){
    super();
     this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsername(event) {
    // needs to update the userinput state as user types into input field, by copying the existing state and modifying the username value
    this.setState({
      ...this.state,
      username: event.target.value
    })
  }

  handleHometown(event) {
    this.setState({
      ...this.state,
      hometown: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({
        type: 'ADD_USER',
        user: this.state,
      });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event) }>
          <input type="text" name="username" value={this.state.username}
            onChange={(event)=> this.handleUsername(event)}
            placeholder="Enter your username"/>
          <input type="text" name="hometown" value={this.state.hometown} onChange={(event)=>this.handleHometown(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
