import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      hometown: ''
    }
  }

  render() {
    const userProps = {
      value: this.state.username,
      onChange: event => this.handleChange(event, 'username')
    }

    const homeProps = {
      value: this.state.hometown,
      onChange: event => this.handleChange(event, 'hometown')
    }

    const formProps = {
      onSubmit: this.handleSubmit.bind(this)
    }

    return(
      <div>
        <form {...formProps} >
          <h3>Username</h3>
          <input type="text" {...userProps} />
          <h3>Hometown</h3>
          <input type="text" {...homeProps} />
          <input type='submit' className='btn btn-large purple' />
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  handleChange(event, key) {
    this.setState({
      [key]: event.target.value
    })
  }
}

export default UserInput;
