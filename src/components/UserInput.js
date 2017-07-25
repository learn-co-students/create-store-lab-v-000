import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

  this.state = {
    username: '',
    hometown: ''
  }
}

  handleUser = (event) => {
    this.setState({
      username: event.target.value,
    })
  }

  handleHometown = (event) => {
    this.setState({
      hometown: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input type="text" className="user" value={this.state.username} onChange={(event) => this.handleUser(event)}/>
        <br/>
        <input type="text" className="home" value={this.state.hometown} onChange={(event) => this.handleHometown(event)}/>
        <br/>
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
