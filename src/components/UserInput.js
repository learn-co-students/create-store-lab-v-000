import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      hometown: ""
    }
  }

  handleOnChange(e, field) {
    this.setState({
      [field]: e.target.value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return(
      <div>
        user input
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <input type="text" name="username" value={this.state.username} onChange={(e) => this.handleOnChange(e, "username")} />
          <input type="text" name="username" value={this.state.hometown} onChange={(e) => this.handleOnChange(e, "hometown")} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
