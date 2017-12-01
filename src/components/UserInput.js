import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      hometown: ''
    }
  }
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit(evt){
    evt.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(evt)=>this.handleSubmit(evt)}>
          <input type='text' onChange={(evt)=>this.handleChange(evt)} value='this.state.username' name='username' placeholder='username'/>
          <input type='text' onChange={(evt)=>this.handleChange(evt)} value='this.state.hometown' name='howetown' placeholder='hometown'/>
          <input type='submit'/>
        </form>

      </div>
    );
  }
};

export default UserInput;
