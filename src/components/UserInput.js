import React, { Component } from 'react'

class UserInput extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      hometown: ''
    }
  }
  handleOnChange (event) {
    this.setState({
      username: event.target.value
    })
  }
  handleHometownChange (event) {
    this.setState({
      hometown: event.target.value
    })
  }
  handleOnSubmit (event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }
  render () {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type='text' onChange={(event) => this.handleOnChange(event)} />
          <input type='text' onChange={(event) => this.handleHometownChange(event)} />
          <input type='submit' />
        </form>
      </div>
    )
  }
};

export default UserInput
