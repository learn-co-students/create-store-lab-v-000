import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      hometown: '',
    }
  }
  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,       
    })
  }
  handleChange(event){
    // debugger
    this.setState({
      [event.target.name]: event.target.value,
   })
  }
  render() {
    return(
      <div>
        <form onSubmit={(event)=> this.handleSubmit(event)}>
        <label>Username</label>
        <input type="text" name="username" value={this.state.username} onChange={(event) => this.handleChange(event)}/>
        <label>Hometown</label>
        <input type="text" name="hometown" value={this.state.hometown} onChange={(event) => this.handleChange(event)}/>
        <button type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
