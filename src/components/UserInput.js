import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
    this.setState({username: '', hometown: ''});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br /><br />
      Hometown: <input type="text" name="hometown" value={this.state.hometown} onChange={this.handleChange} /><br /><br />
        <input type="submit" value="submit" />
      </form>
    );
  }
};

export default UserInput;
