import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleChangeHometown = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
    this.setState({
      username: '',
      hometown: ''
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleChange(event)} />
          <input type="text" onChange={(event) => this.handleChangeHometown(event)} />
        </form>
      </div>
    );
  }
};

export default UserInput;
