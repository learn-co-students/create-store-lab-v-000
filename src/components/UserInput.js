import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleOnChange(event) {
    switch(event.target.name){
      case 'username':
        return this.setState({
          username: event.target.value,
        });
      case 'hometown':
        return this.setState({
          hometown: event.target.value,
        });
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      },
    });
    this.setState({
      username: '',
      hometown: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" name="username" value={this.state.username} onChange={(event) => this.handleOnChange(event)} />
          <input type="text" name="hometown" value={this.state.hometown} onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
