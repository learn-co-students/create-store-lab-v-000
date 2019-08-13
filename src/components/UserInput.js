import React, { Component } from 'react';

class UserInput extends Component {

   state ={
      username: "",
      hometown: ""
   }

   handleChange = e => {
     this.setState({
       [e.target.name]: e.target.value
     })
   }

   handleSubmit = e => {
     e.preventDefault()
     this.props.store.dispatch({
       type: "ADD_USER",
       user: {
         username: this.state.username,
         hometown: this.state.hometown
       }
     })
   }

  render() {
    console.log(this.state.username)
    console.log(this.state.hometown)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label name="username">Username: </label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /> <br/>
          <label name="hometown">Hometown: </label>
          <input type="text" name="hometown" value={this.state.hometown} onChange={this.handleChange} /> <br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
