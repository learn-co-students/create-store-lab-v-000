import React, { Component } from 'react';

class UserInput extends Component {


  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
    };
  };

  handleUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleHometown(event) {
    this.setState({
      hometown: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
      },
    });
    this.setState({
      username: '',
      hometown: '',
    });
  }


  render() {
    return(
      <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)} >
            <input
              type="text"
              value={this.state.username}
              onChange={(event) => this.handleUsername(event)} />
            <input
              type="text"
              value={this.state.hometown}
              onChange={(event) => this.handleHometown(event)} />
            <input type="submit" />
          </form>
        </div>
    );
  }
};

export default UserInput;
