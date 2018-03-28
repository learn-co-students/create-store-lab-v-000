import React, { Component } from 'react';

class UserInput extends Component {

  constructor(){
    super()

    this.state =  {
      username: '',
      hometown: ''
    }
  }

  handleEventChange(event) {
    this.setState({
    [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })

  }
  
  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)} >
            <input 
            type="text"
            onChange={event => this.handleEventChange(event)}
            name="username"
            value={this.state.username}
            />
            <input 
            type="text"
            onChange={event => this.handleEventChange(event)}
            name="hometown"
            value={this.state.hometown}
            />
            <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
