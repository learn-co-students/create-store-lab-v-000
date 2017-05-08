import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUserChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleHomeChange(e) {
    this.setState({
      hometown: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    });

    this.setState({
      username: '',
      hometown: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
              type="text"
              className="username"
              placeholder="username"
              onChange={(event) => this.handleUserChange(event)} />
          <input type="text"
              className="hometown"
              placeholder="hometown"
              onChange={(event) => this.handleHomeChange(event)} />
          <input type="submit" />
        </form>

      </div>
    );
  }
};

export default UserInput;
