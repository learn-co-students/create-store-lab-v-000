import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
    }
  }
  handleOnChangeName(event) {
    this.setState({
      username: event.target.value,
    })
  }

  handleOnChangeTown(event) {
    this.setState({
      hometown: event.target.value,
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
    this.setState({
      username: '',
      hometown: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Username: </label>
          <input
            type='text'
            value={this.state.username}
            onChange={(event) => this.handleOnChangeName(event)}
          /><br></br>
          <label>Hometown: </label>
          <input
            type='text'
            value={this.state.hometown}
            onChange={(event) => this.handleOnChangeTown(event)}
          /><br></br>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
