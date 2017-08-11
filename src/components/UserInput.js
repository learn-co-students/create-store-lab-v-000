import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',

    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  handleOnChange(event) {
    this.setState({
       [event.target.name]: event.target.value
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Username</label>
          <input type="text" name="username" onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Hometown</label>
          <input type="text" name="hometown" onChange={(event) => this.handleOnChange(event)} />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
