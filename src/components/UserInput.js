import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()

    this.state= {
      username: '',
      hometown:''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleHometownChange = this.handleHometownChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleInputChange = this.handleInputChange.bind(this)
  }

  // handleInputChange(event){
  //   this.setState({
  //     ...this.state, [event.target.id]: event.target.value
  //   })
  // }

  handleUsernameChange(event){
    this.setState({
      ...this.state, 
      username: event.target.value
    })
  }
  
  handleHometownChange(event){
    this.setState({
      ...this.state, 
      hometown: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
    this.setState({username:'', hometown:''})
  }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}> 
        <input id="username"
               placeholder="Enter Username"
               type="text" 
               value={this.state.username} 
               onChange={this.handleUsernameChange}
               />
        <input id="hometown"
               placeholder="Enter Hometown"
               type="text"       
               value={this.state.hometown}
               onChange={this.handleHometownChange}
               />
        <button>Submit</button>       
      </form>  
      </div>
    );
  }
};

export default UserInput;
