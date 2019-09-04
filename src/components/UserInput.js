import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <input type='text' name='username' placeholder='username' value={this.state.username} onChange={(event) => this.handleChange(event)} />
          <br />
          <input type='text' name='hometown' placeholder='hometown' value={this.state.hometown} onChange={(event) => this.handleChange(event)} />
          <br />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
