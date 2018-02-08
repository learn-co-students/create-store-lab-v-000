import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        hometown: ''
    }
  }

  handleOnChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
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
        <form onSubmit={this.handleOnSubmit}>
            Username: <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange} />
            Hometown: <input type="text" name="hometown" value={this.state.hometown} onChange={this.handleOnChange} />
            <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
