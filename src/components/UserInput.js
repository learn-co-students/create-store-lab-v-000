import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleOnChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleOnChangeHometown(event) {
    this.setState({
      hometown: event.target.value
    });
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER', 
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
      },
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        user Input form:
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.username} onChange={(event) => this.handleOnChangeUsername(event)} />
          <input type="text" value={this.state.hometown} onChange={(event) => this.handleOnChangeHometown(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
