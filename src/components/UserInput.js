import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          Username: <input type="text" name="username" onChange={this.handleOnChange}></input>
          Hometown: <input type="text" name="hometown" onChange={this.handleOnChange}></input>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
