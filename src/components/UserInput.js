import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    });
  }

  render() {
    return(
      <div>
        <h3>Create New User</h3>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <p>
            Username: <input type="text" name="username" value={this.state.username} onChange={(e)=>this.handleChange(e)} />
          </p>
          <p>
            Hometown: <input type="text" name="hometown" value={this.state.hometown} onChange={(e)=>this.handleChange(e)} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
