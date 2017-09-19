import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
      },
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)} >
          <label htmlFor="username">Username</label> <br/>
          <input type="text" name="username" onChange={(e) => this.handleChange(e)} value={this.state.username} /> <br/>
          <label htmlFor="hometown">Hometown</label> <br/>
          <input type="text" name="hometown" onChange={(e) => this.handleChange(e)} value={this.state.hometown} /> <br/>
          <button>Submit</button>                    
        </form>
      </div>
    );
  }
};

export default UserInput;
