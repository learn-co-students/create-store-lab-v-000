import React, { Component } from 'react';

class UserInput extends Component {
  constructor () {
    super();
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUNChange (event) {
    this.setState({
      username: event.target.value
    })
  }

  handleHTChange (event) {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit () {
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={() => this.handleSubmit()}>
          <p>
            <label htmlFor="username">Username: </label>
            <input id="username" type="text" value={this.state.username} onChange={(event) => this.handleUNChange(event)} />
          </p>
          <p>
            <label htmlFor="hometown">Hometown: </label>
            <input id="hometown" type="text" value={this.state.hometown} onChange={(event) => this.handleHTChange(event)} />
          </p>
        </form>
      </div>
    );
  }
};

export default UserInput;
