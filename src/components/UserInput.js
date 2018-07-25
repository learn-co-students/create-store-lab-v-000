import React, { Component } from 'react'

class UserInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChangeHomeTown (e) {
    this.setState({
      hometown: e.target.value
    })
  }

  handleChangeUsername (e) {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit (e) {
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
  render () {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Username: </label>
          <input type='text' onChange={(e) => this.handleChangeUsername(e)} />
          <label>Hometown: </label>
          <input type='text' onChange={(e) => this.handleChangeHomeTown(e)} />
          <input type='submit' />
        </form>
      </div>
    )
  }
};

export default UserInput
