import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      hometown: ''
    }
  }


  handleChangeUsername(event){
    this.setState({
      username: event.target.value
    })
  }

  handleChangeHomeTown(event){
    this.setState({
      hometown: event.target.value
    })
  }


  handleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>UserName</label>
          <input type="text" onChange={event => this.handleChangeUsername(event)}/>
          <label>Home Town</label>
          <input type="text" onChange={event => this.handleChangeHomeTown(event)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
