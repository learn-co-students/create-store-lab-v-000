import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" name="username" onChange={this.handleInputChange} />
          <input type="text" placeholder="hometown" name="hometown" onChange={this.handleInputChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
