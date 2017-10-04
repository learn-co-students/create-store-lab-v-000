import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChangeUser(event) {
  this.setState({
    username: event.target.value
  });
}

  handleChangeHome(event) {
    this.setState({
      hometown: event.target.value
    });
  }

  handleSubmit(event) {
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
          <input type="text" id="user" onChange={(event) => this.handleChangeUser(event)}/>
          <input type="text" id="hometown" onChange={(event) => this.handleChangeHome(event)}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
