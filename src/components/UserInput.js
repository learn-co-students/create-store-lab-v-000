import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", hometown: "" }
  }
  
  handleChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleChangeHometown(event) {
    this.setState({
      hometown: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: { username: this.state.username, hometown: this.state.hometown }
    });
    this.setState({
      username: '',
      hometown: ''
    });
  }
  
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Username</label>
          <input type="text" value={this.state.username} onChange={(event) => this.handleChangeUsername(event)} />
          <label>Hometown</label>
          <input type="text" value={this.state.hometown} onChange={(event) => this.handleChangeHometown(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
