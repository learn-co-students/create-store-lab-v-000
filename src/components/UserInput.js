import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      hometown: ''
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangeHometown = this.handleChangeHometown.bind(this)
    this.handleForm = this.handleForm.bind(this)
  }

  handleChangeUsername(event){
    this.setState({
      username: event.target.value
    })
  }

  handleChangeHometown(event){
    this.setState({
      hometown: event.target.value
    })
  }

  handleForm(){
    this.props.store.dispatch({
      type:'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleForm}>
          <label>Username: </label>
          <input type="text" onChange={this.handleChangeUsername} value={this.state.username}/>
          <label>Hometown: </label>
          <input type="text" onChange={this.handleChangeHometown} value={this.state.hometown}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
