import React, { Component } from 'react';

class UserInput extends Component {
  state= { username: '', hometown: '' };

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
     });
    this.setState({
      username:'',
      hometown: '',
    })
  }

  handleChange(event) {
    this.setState({
      username: event.target.value,
    })
  }

  handleHometown(event) {
    this.setState({
      hometown: event.target.value,
    })
  }
  render() {
    return(
      <div>
          <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>User</label>
          <input type="text" name="username" onChange={(event) => this.handleChange(event)} value={this.state.username}/>
          <input type="text" name="hometown" onChange={(event) => this.handleHometown(event)} value={this.state.hometown}/>

          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
