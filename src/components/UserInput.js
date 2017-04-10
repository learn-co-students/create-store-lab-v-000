import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleHometownChange(e) {
    this.setState({
      hometown: e.target.value
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    });

    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e) }>
          <label>Username: </label>
          <input value={this.state.username} type="text" onChange={(e) => this.handleUsernameChange(e)}/>
          <br />
          <label>Hometown: </label>
          <input value={this.state.hometown} type="text" onChange={(e) => this.handleHometownChange(e)}/>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
