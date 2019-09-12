import React, { Component } from 'react';

class UserInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      hometown: ''
    }
  }

  onInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.onInputChange}
          />
          <input
            type="text"
            placeholder="Hometown"
            name="hometown"
            value={this.state.hometown}
            onChange={this.onInputChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
