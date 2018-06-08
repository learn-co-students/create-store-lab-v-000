import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
    this.setState({
      username: '',
      hometown: ''
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)} >
          <label>Username:
            <input type='text' onChange={e => this.handleChange(e)} name='username' value={this.state.username} />
          </label>
          <label>Hometown:
            <input type='text' onChange={e => this.handleChange(e)} name='hometown' value={this.state.hometown} />
          </label>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
