import React, { Component } from 'react';

class UserInput extends Component {

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleOnSubmit (event) {
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          Username: <input
                           type='text'
                           onChange={(event) => this.handleOnChange(event)}
                           value={this.state.username}
                           name='username'
                    />
        </p>
        <p>
          Hometown: <input
                           type='text'
                           onChange={(event) => this.handleOnChange(event)}
                           value={this.state.hometown}
                           name='hometown'
                    />
        </p>
        <input type='submit' />
      </form>
    );
  }
};

export default UserInput;
