import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      hometown: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER', user: this.state})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
           value={this.state.username}
           name={'username'}
           onChange={this.handleOnChange} />
          <input type="text"
          value={this.state.hometown}
          onChange={this.handleOnChange}
          name={'hometown'} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
