import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      hometown: ''
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={ e => this.handleSubmit(e) }>
          <input type='text' onChange={ e => this.handleUserChange(e)} />
          <br/><br/>
          <input type='text' onChange={ e => this.handleHomeChange(e)} />
        </form>
      </div>
    );
  }

  handleUserChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleHomeChange(e) {
    this.setState({
      hometown: e.target.value
    })
  }

  handleSubmit(e) {
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }
};

export default UserInput;
